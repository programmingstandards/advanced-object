export default objectFilter = (obj, cb, thisArg) => Object.entries(obj)
.reduce((res, [key, value], index) => {
    if(cb.bind(thisArg)([key, value], index, obj)) {
        res[key] = value;
    }
    return res;
}, {});