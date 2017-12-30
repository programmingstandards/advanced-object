export const objectFill = (obj, fillValue, ...keys) => {
    if (keys.length) {
        return {
            ...obj,
            ...keys.reduce((res, key) => {
                res[key] = fillValue;
                return res;
            }, {}),
        }
    } 
    return Object.entries(obj)
        .reduce((res, [key]) => {
            res[key] = fillValue;
            return res;
        }, {});
};

export default objectFill;