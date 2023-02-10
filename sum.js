const compact = (arr) => {
    const result = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]) {
            result.push(arr[index]);
        }
    }
    return result;
};



const concat = (arr, ...rest) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
     for (let h = 0; h < rest.length; h++) {
        result.push(rest[h])
    }
    return result;
};

module.exports = {
    compact,
    concat
}