function sumNumbers(numbers){
    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log(sumNumbers([1,2,3,4,5]));

function averageNumbers(numbers){
    let sum = sumNumbers(numbers);
    return sum / numbers.length; //need to divide to get the average
}
console.log(averageNumbers([1, 2, 3, 4, 5]));