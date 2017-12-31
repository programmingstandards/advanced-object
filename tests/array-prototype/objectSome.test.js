import {objectSome} from "../../src/main";

describe('objectSome tests', () => {

    let isEven = ([, value]) => value % 2 === 0;

    test('Should return true at least one key-value return true from callback', () => {
        let obj = {
            a: 1,
            b: 3,
            c: 6,
        };
        expect(objectSome(obj, isEven)).toBe(true);
    });

    test('Should return false if none of the key-value pair return true from callback', () => {
        let obj = {
            a: 1,
            b: 3,
            c: 5,
        };
        expect(objectSome(obj, isEven)).toBe(false);
    });


});
