import {strictEqual} from "assert";
import {Strings} from "../src/Tools/Strings";

describe('Strings', function() {
    describe('Strings', async function () {
        it('slugs', async function () {

            strictEqual(
                Strings.slugify('Test Test'),
                'test-test'
            )

            strictEqual(
                Strings.slugify('ASD  Test XXX    Y'),
                'asd-test-xxx-y'
            )
        });
    });
});
