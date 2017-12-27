import objectSome from './objectSome';
export const objectFindKey = (obj, cb, thisArg) => {
    let result = -1;
    objectSome(obj, ([key, value], index) => {
        if(cb([key, value], index, obj)){
            result = key;
            return true;
        }
        return false;
    }, thisArg);
    return result;
};

export default objectFindKey;