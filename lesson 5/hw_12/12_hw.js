
const swap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        const temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }
    return arr;
}


console.log ( swap ([11,22,33,44],0,1));