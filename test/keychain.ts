import { Keychain } from "../src/Keychain";
import { strictEqual, notStrictEqual } from "assert";
import {mnemonic1, mnemonic2} from "./_data";

describe('Keychain Test', function() {
  describe('mnemonics', function() {
    let keychain1 = new Keychain(mnemonic1);
    let keychain2 = new Keychain(mnemonic2);
    it('should generate specific hex seed', function () {
      strictEqual(
          keychain1.getSeed().toString('hex'),
          "2fc8627a54d5c57de1b05a6763b9773aa2a333900282a64c3736ba195e7f1944c685817023f87fb72fa0b4b65859884de26557c571e453466ed5e4fdf3a2da47"
      );
      strictEqual(
          keychain2.getSeed().toString('hex'),
          "cf98815c8aed7fdc08bd31913772c08d9bfc787f3d133edea8ffdd20d29881a80d5ed12e44822d1888a1280ffd04648540e1470805cbfadb39663986d127ee96"
      );
    });

    it('should generate unique, valid mnemonics', function () {
      let previous = keychain1.getSeed().toString('hex');
      //this is just a simple test that does not validate cryptografic safety
      for (let i = 0; i < 5; i++) {
        let randomKeychain = new Keychain(Keychain.newMnemonic());
        notStrictEqual(
            previous,
            randomKeychain.getSeed().toString('hex')
        );
        strictEqual(
            Keychain.validateMnemonic(randomKeychain.mnemonic),
            true
        );
        previous = randomKeychain.getSeed().toString('hex');
      }
    });
    it('should properly validate mnemonics', function () {
      strictEqual(
          Keychain.validateMnemonic(keychain1.mnemonic),
          true
      );
      strictEqual(
          Keychain.validateMnemonic(keychain2.mnemonic),
          true
      );
      strictEqual(
          Keychain.validateMnemonic("this is not a valid mnemonic"),
          false
      );
      strictEqual(
          Keychain.validateMnemonic("this is not a valid mnemonic even that it has 12 words"),
          false
      );
      strictEqual(
          Keychain.validateMnemonic("hello hello hello hello hello hello hello hello hello hello hello hello"),
          false
      );
    });
  });
});

describe('Jazzicon', function() {
  describe('generation', function() {
    //console.log(engine.jazzicon(100, 1235554332));
  });
});
