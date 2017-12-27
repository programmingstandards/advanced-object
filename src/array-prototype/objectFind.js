import objectSome from './objectSome';
export const objectFind = (obj, cb, thisArg) => {
    let result = undefined;
    objectSome(obj, ([key, value], index) => {
        if(cb([key, value], index, obj)){
            result = [key, value];
            return true;
        }
        return false;
    }, thisArg);
    return result;
};

export default objectFind;