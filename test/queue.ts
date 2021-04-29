import {QueuedProcessor} from "../src/Core/QueuedProcessor";
import {deepStrictEqual, strictEqual} from "assert";

describe('Queue', function() {
    describe('queue', async function () {
        it('executes in order', async function () {
            let start = new Date().getTime();
            let processor = new QueuedProcessor(200);
            let resolutions: number[] = []
            processor.process(() => new Promise<void>(resolve => setTimeout(function() {
                    resolutions.push(1);
                    resolve();
                }, 100))
            );
            processor.process(() => new Promise<void>(resolve => setTimeout(function() {
                    resolutions.push(2);
                    resolve();
                }, 100))
            );
            await processor.process(() => new Promise<void>(resolve => setTimeout(function() {
                    resolutions.push(3);
                    resolve();
                }, 100))
            );
            deepStrictEqual(
                resolutions,
                [ 1, 2, 3 ]
            )
            strictEqual(
                new Date().getTime() - start >= 900,
                true
            )
        });
    });
});
