/* 
    Similar to Array.prototype.indexOf(), but like it gives all indices in an array.
    Returns an empty array if no occurences found.
 */

export const objectKeysOf = (obj, searchElement) => {
    return Object
        .keys(obj)
        .filter(key => obj[key] === searchElement);
} 

export default objectKeysOf;