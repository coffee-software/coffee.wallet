"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var Engine_1 = require("../src/Engine");
var _mocks_1 = require("./_mocks");
describe('Engine Test', function () {
    describe('Storage', function () {
        it('core', function () {
            var storage = new _mocks_1.StorageMock();
            storage.setItem('test', 123, function () {
                var read = storage.getItem('test', function (value) {
                    assert_1.strictEqual(value, 123);
                }, function (x) { });
            }, function (x) { });
        });
    });
    describe('Engine', function () {
        it('load', function () {
            var engine = new Engine_1.Engine(new _mocks_1.StorageMock(), new _mocks_1.LogMock(), new _mocks_1.CacheMock());
        });
    });
});
//# sourceMappingURL=engine.js.map