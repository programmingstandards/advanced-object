export const objectFill = (obj, fillValue, ...keys) => {
    if (keys.length) {
        return Object.entries(obj)
        .reduce((res, [key, value]) => {
            res[key] = keys.include(key) ? fillValue : value;
            return res;
        }, {});
    } 
    return Object.entries(obj)
        .reduce((res, [key]) => {
            res[key] = fillValue;
            return res;
        }, {});
};

export default objectFill;