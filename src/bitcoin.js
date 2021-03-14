'use strict';

var coininfo = require('coininfo');
var bitcoin = require('bitcoinjs-lib');
var bip39 = require('bip39');
var bip32 = require('bip32');
var base58 = require('bs58');
var bech32 = require('bech32');

//TODO!!!!
var networks = {
	ltc: {
		webapi: 'https://api.blockcypher.com/v1/ltc/main',
		defaultFee: 10000,
		network: coininfo.litecoin.main.toBitcoinJS()
		/*
		network: {
            messagePrefix: '\x19Litecoin Signed Message:\n',
            bip32: {
                public: 0x019da462,
                private: 0x019d9cfe,
            },
            bech32: 'ltc',
            pubKeyHash: 0x30,
            scriptHash: 0x32,
            wif: 0xb0,
        }*/
	},
	btc: {
		webapi: 'https://api.blockcypher.com/v1/btc/main',
		defaultFee: 10000,
		network: bitcoin.networks.bitcoin
	},
	bch: {
	    bitcoinCom: true,
		webapi: 'https://rest.bitcoin.com/v2',
		defaultFee: 10000,
		network: bitcoin.networks.bitcoin
	},
	bchtest: {
	    bitcoinCom: true,
		webapi: 'https://trest.bitcoin.com/v2',
		defaultFee: 10000,
		network: bitcoin.networks.testnet
	},
	test: {
		webapi: 'https://api.blockcypher.com/v1/btc/test3',
		defaultFee: 10000,
		network: bitcoin.networks.testnet
	},
	doge: {
		webapi: 'https://api.blockcypher.com/v1/doge/main',
		defaultFee: 100000000,
		network: coininfo.dogecoin.main.toBitcoinJS()
		/*network: {
			messagePrefix: '\x19Dogecoin Signed Message:\n',
			bip32: {
				public: 0x02facafd,
				private: 0x02fac398
			},
			pubKeyHash: 0x1e,
			scriptHash: 0x16,
			wif: 0x9e
		}*/
	},
	eth: {
		network: {
			messagePrefix: '\x19Ethereum Signed Message:\n',
            bip32: {
                public: 0xffffffff,
                private: 0xffffffff
            },
            pubKeyHash: 0xff,
			scriptHash: 0xff,
	  	    wif: 0xff
		}
	}
};

var _webRequestQueue = new Array();
function _webRequestProcessor () {
	var request = _webRequestQueue.pop();
	var xhr = new XMLHttpRequest();
	xhr.open('GET', request.url, true);
	xhr.responseType = 'json';
	xhr.onreadystatechange = function () {
	    if (xhr.readyState === 4) {
				console.log(request.url);
				request.callback(xhr);
	    }
	};
	xhr.send();
	if (_webRequestQueue.length > 0) setTimeout(_webRequestProcessor, 400);
}

function sendWebRequestGetQueued (url, callback) {
	_webRequestQueue.push({'url': url, 'callback': callback});
	if (_webRequestQueue.length == 1) setTimeout(_webRequestProcessor, 400);
}

function newPrivKey (network) {
	return bitcoin.ECPair.makeRandom({network:network.network}).toWIF();
}

function addrFromPriv (network, pk) {
	var key = bitcoin.ECPair.fromWIF(pk, network.network);
	/*console.log('ADDRESSES');
	console.log(bitcoin.payments.p2pkh({
        	    pubkey: key.publicKey,
        	    network: network.network
        }).address);
    console.log(bitcoin.payments.p2wpkh({
            	    pubkey: key.publicKey,
            	    network: network.network
            }).address);*/
    return bitcoin.payments.p2pkh({
    	    pubkey: key.publicKey,
    	    network: network.network
    }).address;

}

function getBalance (network, addr, callback, error) {
    if (network.bitcoinCom) {
        sendWebRequestGetQueued(network.webapi + '/address/details/' + addr, function(xhr) {
            if (xhr.status === 200) {
                callback(xhr.response.balanceSat, xhr.response.unconfirmedBalanceSat);
            } else {
                error('network error ' + xhr.status);
            }
        });
    } else {
        sendWebRequestGetQueued(network.webapi + '/addrs/' + addr + '/balance', function(xhr) {
            if (xhr.status === 200) {
                callback(xhr.response.balance, xhr.response.unconfirmed_balance);
            } else {
                error('network error ' + xhr.status);
            }
        });
	}
}

/*function smartRound(f) {
  return parseFloat(f.toExponential(Math.max(4, 4 + Math.log10(Math.abs(f)))));
}*/

function generateFeesFromAvg(avgFee) {
	var t = 10; //TODO avarage block time
	var factors = [0.2, 0.4, 0.6, 0.8, 1, 1.3, 1.7, 2.3, 3];
	var newFees = [];
	for (var i=0; i<factors.length; i++) {
		//fee: [satoshiPerByte, timeEst]
		newFees.push([Math.round(avgFee * factors[i]), (t / factors[i]).toFixed(2)]);
	}
	return newFees;
}

function getFees (network, callback, error) {
	//TODO. use dedicated API
	if (network.bitcoinCom) {
	    return callback(generateFeesFromAvg(2000));
	}
	var xhr = new XMLHttpRequest();
	xhr.open('GET', network.webapi, true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		if (xhr.status === 200) {
			var xhr2 = new XMLHttpRequest();
			xhr2.open('GET', xhr.response.latest_url, true);
			xhr2.responseType = 'json';
			xhr2.onload = function() {
				if (xhr2.status === 200) {
					if (('fees' in xhr2.response) && (xhr2.response.fees > 0) && ('size' in xhr2.response) && (xhr2.response.size > 0)) {
						callback(generateFeesFromAvg((xhr2.response.fees / xhr2.response.size) * 256));
					} else {
						callback(generateFeesFromAvg(network.defaultFee));
					}
				} else {
					callback(generateFeesFromAvg(network.defaultFee));
				}
			}
			xhr2.send();
		} else {
			callback(generateFeesFromAvg(network.defaultFee));
		}
	};
	xhr.send();
}

var txCount = 0;
var txCallback = null;
var txHashCache = [];

function getTxHex(network, txId, callback) {
    if (txId in txHashCache) {
        callback(txHashCache[txId]);
    } else {
        console.log('GET TX XXXXX');
        txCount ++;
        sendWebRequestGetQueued(network.webapi + '/txs/' + txId + '?includeHex=true', function(xhr){
            //'https://api.blockcypher.com/v1/btc/test3/txs/ce13b6caff48dc4eabad8c1cb0487e0a84cd8632d3fe1a00caace0dea767ea05?includeHex=true'
            console.log('GET');
            callback(xhr.response.hex);
            txCount --;
            proceedAfterAllTxs(txCallback);
        });
    }
}

function proceedAfterAllTxs(callback) {
    if (txCount == 0) {
        callback();
    } else {
        txCallback = callback;
    }
}

function getUtxoForAddr(network, address, callback, error) {
    var url;
	var xhr = new XMLHttpRequest();
    if (network.bitcoinCom) {
        url = network.webapi + '/address/utxo/' + address;
    } else {
        url = network.webapi + '/addrs/' + address + '?unspentOnly=true&includeScript=true';
    }
	sendWebRequestGetQueued(url, function(xhr) {
	    console.log('XXXXX');
		if (xhr.status === 200) {
		    var ret = [];
            if (network.bitcoinCom) {
                if ('utxos' in xhr.response) {
                    for (var i = xhr.response.utxos.length - 1; i >= 0; i --) {
                        ret.push({
                            value: xhr.response.utxos[i].satoshis,
                            hash: xhr.response.utxos[i].txid,
                            vout: xhr.response.utxos[i].vout,
                            confirmed: xhr.response.utxos[i].confirmations > 0
                        });
                    }
                }
            } else {
                if ('txrefs' in xhr.response) {
                    for (var i = xhr.response.txrefs.length - 1; i >= 0; i --) {
                        //console.log(xhr.response.txrefs[i].tx_hash);
                        //console.log(bitcoin.classifyScript(xhr.response.txrefs[i].script));
                        getTxHex(network, xhr.response.txrefs[i].tx_hash, function(i){
                            return function(hex){
                                console.log(i);
                                ret.push({
                                    value: xhr.response.txrefs[i].value,
                                    hash: xhr.response.txrefs[i].tx_hash,
                                    script: xhr.response.txrefs[i].script,
                                    vout: parseInt(xhr.response.txrefs[i].tx_output_n),
                                    confirmed: true,
                                    utxo: hex
                                });
                            };
                        }(i));
                    }
                }
                if ('unconfirmed_txrefs' in xhr.response) {
                    for (var i = xhr.response.unconfirmed_txrefs.length - 1; i >= 0; i --) {
                        console.log(xhr.response.unconfirmed_txrefs[i].tx_hash);
                        getTxHex(network, xhr.response.unconfirmed_txrefs[i].tx_hash, function(i){
                            return function(hex){
                                ret.push({
                                    value: xhr.response.unconfirmed_txrefs[i].value,
                                    hash: xhr.response.unconfirmed_txrefs[i].tx_hash,
                                    script: xhr.response.unconfirmed_txrefs[i].script,
                                    vout: parseInt(xhr.response.unconfirmed_txrefs[i].tx_output_n),
                                    confirmed: false,
                                    utxo: hex
                                });
                            };
                        }(i));
                    }
                }
            }
            proceedAfterAllTxs(function(){callback(ret);});
		} else {
			error && error(xhr.statusText, xhr);
		}
	});
}




function sendPayment (network, pk, receiver, amount, fee, success, error) {
	if ((!Number.isInteger(amount)) || (!Number.isInteger(fee))) {
		error('amounts needs to be integers');
		return;
	}

	var key = bitcoin.ECPair.fromWIF(pk, network.network);
	/* var address = bitcoin.payments.p2pkh({
	    pubkey: key.publicKey,
	    network: network.network
	}).address; */

	var address = bitcoin.payments.p2wpkh({
	    pubkey: key.publicKey,
	    network: network.network
	}).address;


    //var address = bitcoin.payments.p2pkh({key.publicKey, }).address;
    //console.log(address);

	getUtxoForAddr(network, address, function(utxo) {
        console.log(utxo);
        //return;

        //var txb = new bitcoin.TransactionBuilder(network.network);

        var tx = new bitcoin.Psbt({network:network.network});
        var totalIn = 0;
        var vins = [];
        var atLeastOneUnconfirmed = false;
        for (var i = 0; i < utxo.length; i ++) {
            totalIn += utxo[i].value;
            tx.addInput({
                hash: utxo[i].hash,
                index: utxo[i].vout,
                /*nonWitnessUtxo: Buffer.from(utxo[i].utxo, 'hex'),*/
                witnessUtxo: {
                    script: Buffer.from(
                        utxo[i].script,
                        'hex',
                    ),
                    value: utxo[i].value,
                }
            });
            //vins.push(txb.addInput(utxo[i].hash, utxo[i].vout));
            if (totalIn >= amount + fee) break; //we have enough fees
            if (!atLeastOneUnconfirmed && !utxo[i].confirmed) {
                atLeastOneUnconfirmed = true;
                app.alertInfo('warning: sending using unconfirmed inputs!');
            }
        }

        if (totalIn < amount + fee) {
            error('No sufficient funds on source wallet. Total confirmed and unconfirmed balance is ' + (totalIn* 0.00000001) + '', utxo);
            return;
        }
        //console.log(totalIn, amount, totalIn - amount - fee);
        tx.addOutput({address:receiver, value:amount});
        //txb.addOutput(receiver, amount);
        //calculating change
        var change = totalIn - amount - fee;

        if (change > 0) {
            if (change < fee) {
                app.alertInfo('warning. dust leftover detected. transaction might fail. consider using "send all" feature next time.');
            }
            //TODO new address:
            tx.addOutput({address:address, value:change});
            //txb.addOutput(address, change);
        }

        /*for (var i=0; i<vins.length; i++){
            //sign all inputs
            //TODO
            txb.sign(vins[i], key);
        }*/

        //console.log(txb.build().virtualSize());

        //console.log(txb.build().toHex());
        //return console.log(txb.build().toHex());

        //      .addInputs([inputData, inputData2])
        //      .addOutputs([outputData, outputData2])

        tx.signAllInputs(key).finalizeAllInputs();
        console.log('TRANSACTION');
        console.log(tx.extractTransaction().toHex());
        console.log('FEE');
        console.log(tx.extractTransaction().virtualSize());
        //return;
        var pushXhr = new XMLHttpRequest();
        pushXhr.open('POST', network.webapi + '/txs/push', true);
        pushXhr.setRequestHeader("Content-Type", "application/json");
        pushXhr.responseType = 'json';
        pushXhr.onload = function() {
            if (pushXhr.status === 201) {
                success(pushXhr.response.tx.hash);
            } else {
                error('error' in pushXhr.response ? pushXhr.response.error : 'unknown error', pushXhr.response);
            }
        };
        //console.log(txb.inputs);
        pushXhr.send(JSON.stringify({tx:tx.extractTransaction().toHex()}));
        //pushXhr.send(JSON.stringify({tx:txb.build().toHex()}));
	}, error);
}

function validateAddress (network, addr) {
	try{
		bitcoin.address.toOutputScript(addr, network.network);
		return true;
	} catch (e) {
		return false;
	}
}

//'m/0/0'
function derivePathFromSeedHash(network, sh, path) {
    return bip32.fromSeed(Buffer.from(sh, 'hex'), network.network).derivePath(path);
}

function mnemonicToSeedHex (mnemonic) {
    return bip39.mnemonicToSeedSync(mnemonic).toString('hex');
}

module.exports = {
	_webRequestProcessor: _webRequestProcessor,
	networks: networks,
	newPrivKey: newPrivKey,
	addrFromPriv: addrFromPriv,
	getBalance: getBalance,
	getFees: getFees,
	validateAddress: validateAddress,
	sendPayment: sendPayment,

	generateNewMnemonic: bip39.generateMnemonic,
	mnemonicToSeedHex: mnemonicToSeedHex,
	validateMnemonic: bip39.validateMnemonic,

	derivePathFromSeedHash: derivePathFromSeedHash,
	base58: base58,
	bech32: bech32
}