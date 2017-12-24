// let objectMap = require("../../src/main");
import {objectMap} from "../../src/main";
// import advancedObject from "../../src/main";

describe('objectMap tests', () => {
    let obj = {
        a: 10,
        b: 20,
        c: 30,
    };

    let doubler = (key, value) => value * 2;
    test('values should double', () => {
        console.log(objectMap);
        // expect(advancedObject.objectMap(obj, doubler)).toEqual({
        expect(objectMap(obj, doubler)).toEqual({
            a: 20,
            b: 40,
            c: 60, 
        });
    });

});
