export const objectForEach = (obj, cb, thisArg) => Object.entries(obj)
.forEach(([key, value], index) => {
    cb([key, value], index, obj);
}, thisArg);

export default objectForEach;