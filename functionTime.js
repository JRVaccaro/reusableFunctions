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

function longestString(strings){
    let longest = "";

    for (let i = 0; i < strings.length; i++){
        if(strings[i].length > longest.length){
            longest = strings[i];
        }
    }
    return longest;
}
console.log(longestString(["Eevee", "Pikachu", "Rockruff"]));

//'IM TIRED OF THIS GRANDPA' 'THATS TOO DANG BAD'


//take an array of strings, and a number, and return an array of the strings that are longer then the given number... uh. hm

function stringsLongerThanNum(strings, number){
    let longerStrings = [];

    for(let i = 0; i < strings.length; i++){
        if(strings[i].length > number){
            longerStrings.push(strings[i]);
        }
    }
    return longerStrings;
}
console.log(stringsLongerThanNum(["Why", "Must", "I", "SUFFER"], 3));