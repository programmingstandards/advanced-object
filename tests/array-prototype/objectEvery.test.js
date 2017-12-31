import {objectEvery} from "../../src/main";

describe('objectEvery tests', () => {

    let isEven = ([, value]) => value % 2 === 0;

    test('Should return true if all key-value pairs return true from callback', () => {
        let obj = {
            a: 2,
            b: 4,
            c: 6,
        };
        expect(objectEvery(obj, isEven)).toBe(true);
    });

    test('Should return false if at least one key-value pair return false from callback', () => {
        let obj = {
            a: 2,
            b: 4,
            c: 7,
        };
        expect(objectEvery(obj, isEven)).toBe(false);
    });


});
