/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    const vowels = 'aeiou';
    const letters = word.split('').reverse();
    let lastVowelFound = false;

    let new_letters = letters.filter(function(char) {
        if(vowels.includes(char) && lastVowelFound == false){
            lastVowelFound = true;
        } else {
            return char;
        }
    }).reverse().join(''); 
    
    return new_letters ;
    
};
let hipsterfy = function(sentence) {
    return sentence.split(' ').map(removeLastVowel).join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
