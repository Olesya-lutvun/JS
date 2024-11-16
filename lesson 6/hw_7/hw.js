function sortNums (arrayOfNums, direction){
    if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
    if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);
}
const result1 = sortNums (
    [11, 21, 3],'ascending'
);
const result2 = sortNums (
    [11, 21, 3],'descending'
);

console.log(result1, result2);