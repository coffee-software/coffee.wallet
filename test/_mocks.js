"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = require("../src/Engine");
var StorageMock = (function () {
    function StorageMock() {
        this.data = new Map();
    }
    StorageMock.prototype.getItem = function (name, success, error) {
        if (this.data.has(name)) {
            success(this.data.get(name));
        }
        else {
            error("does not exist");
        }
    };
    StorageMock.prototype.setItem = function (name, value, success, error) {
        this.data.set(name, value);
        success();
    };
    return StorageMock;
}());
exports.StorageMock = StorageMock;
var LogMock = (function () {
    function LogMock() {
    }
    LogMock.prototype.error = function (html, coinCode, debug) {
    };
    LogMock.prototype.info = function (html, coinCode, debug) {
    };
    LogMock.prototype.success = function (html, coinCode, debug) {
    };
    return LogMock;
}());
exports.LogMock = LogMock;
var CacheMock = (function () {
    function CacheMock() {
        this.data = new Map();
    }
    CacheMock.prototype.getItem = function (key) {
        return this.data.get(key);
    };
    CacheMock.prototype.setItem = function (key, value) {
        this.data.set(key, value);
    };
    return CacheMock;
}());
exports.CacheMock = CacheMock;
var CacheWrapperMock = (function (_super) {
    __extends(CacheWrapperMock, _super);
    function CacheWrapperMock() {
        return _super.call(this, new CacheMock()) || this;
    }
    return CacheWrapperMock;
}(Engine_1.CacheWrapper));
exports.CacheWrapperMock = CacheWrapperMock;
//# sourceMappingURL=_mocks.js.map