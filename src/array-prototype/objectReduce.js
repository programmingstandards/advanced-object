export const objectReduce = (obj, cb, initialValue) => Object.entries(obj)
    .reduce((res, [key, value], index) => {
        return cb(res, [key, value], index, obj);
    }, initialValue !== undefined ? initialValue : {});

export default objectReduce;