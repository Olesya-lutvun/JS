function ArrayMinValue(numbers){
    let min = numbers [0];
    for (let i= 1; i < numbers.length; i++) {
        let number = numbers [i];
        if (numbers < min){
            min = numbers
        }
    }
    return min;
}

console.log(ArrayMinValue ([123, 122, 444, 23, 666]));