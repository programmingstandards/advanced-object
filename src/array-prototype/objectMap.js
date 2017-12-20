export const objectMap = (obj, cb, thisArg) => Object.entries(obj)
.reduce((res, [key, value], index) => {
    res[key] = cb.bind(thisArg)(key, value, index, obj);
    return res;
}, {});

export default objectMap;