const ArrayMinValue = (numbers) =>{
    let min = numbers [0];
    for (let i= 1; i < numbers.length; i++) {
        let number = numbers [i];
        if (number < min){
            min = number
        }
    }
    return min;
}
const inputData = [123, 122, 444, 23, 666];
console.log(ArrayMinValue (inputData));