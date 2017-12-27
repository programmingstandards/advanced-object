export const isPlainObject = (obj) => {
    if (typeof obj == 'object' && obj !== null) {
        var proto = Object.getPrototypeOf(obj);
        return proto === Object.prototype || proto === null;
    }
    return false;
};

export default isPlainObject;