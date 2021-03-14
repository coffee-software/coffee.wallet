var assert = require('assert');
var engine = require('../src/index');

describe('Bitcoin', function() {
  describe('mnemonic to PK', function() {
    var mnemonic = "hello world hello world hello world hello world hello world hello world";

    console.log(engine.bitcoin.generateNewMnemonic());
    assert.equal(
        engine.bitcoin.mnemonicToSeedHex(mnemonic),
        "f7aee1071153ca5e0084f0b502ba820b13f7609c7b06a58f9ba93c52c1c988272fc5562dfb12475199a9bc440319f4f2454b0cfc1d1817a89c9bdfd44914a55c"
    );

  });
  describe('address from keyphrase', function() {
    console.log(engine.bitcoin.bip32);
  });
});

describe('Jazzicon', function() {
  describe('generation', function() {
    //console.log(engine.jazzicon(100, 1235554332));
  });
});
