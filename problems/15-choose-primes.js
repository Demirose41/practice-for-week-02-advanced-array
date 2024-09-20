/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

*/
const arrayRange = function(start, stop, step){
    return Array.from( { length : (start, stop) / step + 1}, (value, index) => start + index * step);
} 


let isPrime = function(num) {
    const range = arrayRange(2,num - 2 , 1);
    let isPrime = true;
    range.forEach(element => {
        
       if(num % element == 0 && num != element){
       	isPrime = false;
       };
    });
    return isPrime;
}

let choosePrimes = function(nums) {
    return nums.filter(function(num) {
        return isPrime(num);
    });
}

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
