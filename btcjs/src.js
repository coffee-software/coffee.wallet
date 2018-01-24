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

module.exports = {
	networks,
	newPrivKey,
	addrFromPriv,
	getBalance
}

