import { strictEqual, notStrictEqual } from "assert";
import {Engine} from "../src/Engine";
import {CacheMock, LogMock, StorageMock} from "./_mocks";

describe('Engine Test', function() {
    describe('Storage', function () {
        it('core', function () {
            let storage = new StorageMock();
            storage.setItem(
                'test',
                123,
                function () {
                    let read = storage.getItem(
                        'test',
                        function (value : any) {
                            strictEqual(
                                value,
                                123
                            );
                        },
                        function (x) {}
                    );
                },
                function (x) {}
            );
        });
    });
    describe('Engine', function () {
        it('load', function () {
            let engine = new Engine(
                new StorageMock(),
                new LogMock(),
                new CacheMock()
            );
        });
    });
});
