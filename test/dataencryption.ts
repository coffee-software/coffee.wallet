import {strictEqual, deepStrictEqual} from "assert";
import {Keychain} from "../src/Engine";
import {mnemonic1} from "./_data";
import {Encryptor} from "../src/Core/Encryptor";

describe('Engine Data Encryption Test', function() {
    describe('Data Encryption', function () {
        it('core', function () {
            let keychain = new Keychain(mnemonic1);
            let encryptor = new Encryptor();
            let data = {
                'test' : 'test',
                'test2': 12345
            };
            let encrypted = encryptor.encryptData(keychain, data);
            let decrypted = encryptor.decryptData(keychain, encrypted);
            deepStrictEqual(data, decrypted);
            decrypted = encryptor.decryptData(keychain, {
                'key': '034035ad46c7ec5e87fb47ed410ea265f10676f6bf4ac7382acedca71f6f84ce39',
                'data': '04a5d638bb31477f15856ca565111389c8253a65b58e7a8fe73df58f08740fb5dba859c3a6c190c5efadc03dd78522ee16d215eef67d7d2a7424e533fe0557cf6f73dc890f1c707c27b446ac8e8bf4069bbf79f6e2bb032d713fe2f5c817f1d6fc43fd81a05ac222db37842ba2b9ffb5392bfe20a0c57243a55c8a047df1',
                'sign': '6307c6ad714aac49f7319f2d063498e544404e3ea24e301ae0983735353da30d3d127dfc1e4805cf8054314be2a446d1e3a508aad628cc958c6aeb8aa735ba96'
            });
            deepStrictEqual(data, decrypted);
            let errorMsg = '';
            try {
                encryptor.decryptData(keychain, {
                    'key': '034035ad46c7ec5e87fb47ed410ea265f10676f6bf4ac7382acedca71f6f84ce39',
                    'data': '048aa7060e4d03df5915ca28ecb9df135e9d44ed96f1e5c4a13fd2e7037416f3eeb62127f0d50e492c42fcb23a76a91a99c72221f3c7f5a7e26b8e2be6d62152d00787b100448502ad0fb19c246ad71100ac53d65c59b50c58f82cef59e4fa27b40582d3147125efa3e5e02f6309c85af3bb6882c4c9c91bbfade3f3c6d7',
                    'sign': '268e33b1b830b93aa8bc12b7344fc7e03ca7ec620a4053cc30ecc96237878afa1d7e39016394eae42ff7b0cb29b45f37479a925f6c350aefb1fdfb65c52fb5dc'
                });
            } catch (error) {
                errorMsg = error.message;
            }
            strictEqual(errorMsg, 'invalid data signature');
        });
    });
});
