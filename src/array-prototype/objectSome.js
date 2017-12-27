export const objectSome = (obj, cb, thisArg) => Object.entries(obj)
.some(([key, value], index) => cb([key, value], index, obj), thisArg);

export default objectSome;