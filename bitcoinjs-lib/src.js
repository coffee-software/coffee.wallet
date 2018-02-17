let bitcoin = require('bitcoinjs-lib')

/* TODO support dogecoin:
https://github.com/bitcoinjs/bitcoinjs-lib/commit/a956b8859fe73787b32f03b8bf4ba0d06cb01fa6
doge:
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
}
*/

let networks = {
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
			for (var i = xhr.response.txrefs.length - 1; i >= 0; i --) {
				totalIn += xhr.response.txrefs[i].value;
				//console.log(xhr.response.txrefs[i].tx_hash, parseInt(xhr.response.txrefs[i].tx_output_n));
				txb.addInput(xhr.response.txrefs[i].tx_hash, parseInt(xhr.response.txrefs[i].tx_output_n));
				//console.log(txb.inputs);
				if (totalIn >= amount + fee) break; //we have enough fees
			}
			if (totalIn < amount + fee) {
				error('There is no sufficient founds (maybe inputs are pending?)', xhr.response);
				return;
			}
			//console.log(totalIn, amount, totalIn - amount - fee);

			txb.addOutput(receiver, amount);
			//TODO new address:
			txb.addOutput(key.getAddress(), totalIn - amount - fee);
			txb.sign(0, key);
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

module.exports = {
	networks,
	newPrivKey,
	addrFromPriv,
	getBalance,
	validateAddress,
	sendPayment
}
