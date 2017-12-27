/* Similar to Array.prototype.indexOf() */

import objectSome from './objectSome';
export const objectKeyOf = (obj, searchElement) => {
    let result = -1;
    objectSome(cb, ([key, value]) => {
        if(value === searchElement) {
            result = key;
            return false;
        }
        return true;
    })
    return result;
} 

export default objectKeyOf;