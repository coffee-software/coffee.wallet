'use strict';

var jazzicon = require('@metamask/jazzicon');
var core = require('./core');
var bitcoin = require('./bitcoin');
var createHmac = require('create-hmac');

function hmacSha512Sign(data, secret) {
	return createHmac('sha512', secret).update(data).digest('hex');
}

module.exports = {
	jazzicon: jazzicon,
	bitcoin: bitcoin,
	core: core,
	hmacSha512Sign: hmacSha512Sign,
}