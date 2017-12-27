export const objectMerge = (...objList) => {
    return objList.reduce((res, next) => ({
        ...res, 
        ...next,
    }), {})
};

export default objectMerge;