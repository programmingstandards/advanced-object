export const objectEvery = (obj, cb, thisArg) => Object.entries(obj)
.every(([key, value], index) => cb([key, value], index, obj), thisArg);

export default objectEvery;