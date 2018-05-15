'use strict'

var bitcoin = require('bitcoinjs-lib');
var bip39 = require('bip39');


var networks = {
	ltc: {
		webapi: 'https://api.blockcypher.com/v1/ltc/main',
		network: bitcoin.networks.litecoin
	},
	btc: {
		webapi: 'https://api.blockcypher.com/v1/btc/main',
		network: bitcoin.networks.bitcoin
	},
	test: {
		webapi: 'https://api.blockcypher.com/v1/btc/test3',
		network: bitcoin.networks.testnet
	},
	doge: {
		webapi: 'https://api.blockcypher.com/v1/doge/main',
		network: {
			messagePrefix: '\x19Dogecoin Signed Message:\n',
			bip32: {
				public: 0x02facafd,
				private: 0x02fac398
			},
			pubKeyHash: 0x1e,
			scriptHash: 0x16,
			wif: 0x9e
		}
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
}

function newPrivKey (network) {
	return bitcoin.ECPair.makeRandom({network:network.network}).toWIF();
}

function addrFromPriv (network, pk) {
	return bitcoin.ECPair.fromWIF(pk, network.network).getAddress();
}

function getBalance (network, addr, callback, error) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', network.webapi + '/addrs/' + addr + '/balance', true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		if (xhr.status === 200) {
			callback(xhr.response.balance, xhr.response.unconfirmed_balance);
		} else {
			error && error(xhr);
		}
	};
	xhr.send();
}

function sendPayment (network, pk, receiver, amount, fee, success, error) {

	var key = bitcoin.ECPair.fromWIF(pk, network.network);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', network.webapi + '/addrs/' + key.getAddress() + '?unspentOnly=true', true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		if (xhr.status === 200) {
			//
			var txb = new bitcoin.TransactionBuilder(network.network);
			var totalIn = 0;
			var vins = [];

			if ('txrefs' in xhr.response) {
				for (var i = xhr.response.txrefs.length - 1; i >= 0; i --) {
					totalIn += xhr.response.txrefs[i].value;
					vins.push(txb.addInput(xhr.response.txrefs[i].tx_hash, parseInt(xhr.response.txrefs[i].tx_output_n)));
					//console.log(txb.inputs);
					if (totalIn >= amount + fee) break; //we have enough fees
				}
			}
			if ('unconfirmed_txrefs' in xhr.response) {
				for (var i = xhr.response.unconfirmed_txrefs.length - 1; i >= 0; i --) {
					totalIn += xhr.response.unconfirmed_txrefs[i].value;
					vins.push(txb.addInput(xhr.response.unconfirmed_txrefs[i].tx_hash, parseInt(xhr.response.unconfirmed_txrefs[i].tx_output_n)));
					//console.log(txb.inputs);
					if (totalIn >= amount + fee) break; //we have enough fees
				}
			}

			if (totalIn < amount + fee) {
				error('There is no sufficient founds on source wallet. Total confirmed and unconfirmed balance is ' + (totalIn* 0.00000001) + 'BTC', xhr.response);
				return;
			}
			//console.log(totalIn, amount, totalIn - amount - fee);

			//calculating change
			if (false && totalIn - amount - fee < fee) {
				//TODO think this trough
				app.alertInfo('dust leftover detected. will add to transaction');
				amount = totalIn - fee;
				txb.addOutput(receiver, amount);
			} else {
			//TODO new address:
				txb.addOutput(receiver, amount);
				txb.addOutput(key.getAddress(), totalIn - amount - fee);
			}

			for (var i=0; i<vins.length; i++){
				//sign all inputs
				txb.sign(vins[i], key);
			}

			//console.log(txb.build().toHex());
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
			pushXhr.send(JSON.stringify({tx:txb.build().toHex()}));

		} else {
			error && error(xhr.statusText, xhr);
		}
	};
	xhr.send();
}

function validateAddress (network, addr) {
	try{
		bitcoin.address.toOutputScript(addr, network.network);
		return true;
	} catch (e) {
		return false;
	}
}

function derivePathFromSeedHash(network, sh, path) {
	return bitcoin.HDNode.fromSeedHex(sh, network.network).derivePath(path).keyPair;
}

module.exports = {
	networks: networks,
	newPrivKey: newPrivKey,
	addrFromPriv: addrFromPriv,
	getBalance: getBalance,
	validateAddress: validateAddress,
	sendPayment: sendPayment,

	generateNewMnemonic: bip39.generateMnemonic,
	mnemonicToSeedHex: bip39.mnemonicToSeedHex,
	derivePathFromSeedHash: derivePathFromSeedHash

}
