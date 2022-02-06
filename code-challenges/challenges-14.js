'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    // write your code here
    let last = str.lastIndexOf(' ');
    return str.slice(last + 1, str.length);
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    // write your code here
    let s = str.split(' ');
    return s[s.length - 1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    // write your code here
    let arr = str.split(' ');

    let ii = arr.indexOf('I');
    if (ii !== -1)
        arr.splice(ii, 1, 'We');

    let am = arr.indexOf('am');
    if (am !== -1)
        arr.splice(am, 1, 'are');

    let was = arr.indexOf('was');
    if (was !== -1)
        arr.splice(was, 1, 'were');

    return arr.reduce((s, s2) => s + " " + s2);
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here
    arr.splice(5, 0, ',');

    return arr.reduce((s, s2) => {
        if (s2 === ',')
            return s + s2;
        else return s + " " + s2;
    });
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
    let words = str.split(' ');
    let result = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        let arr = word.split('');
        let currentLetter = arr[0];
        let count = 1;

        for (let j = 1; j < arr.length; j++) {
            const nextLetter = arr[j];
            if (nextLetter === currentLetter) {
                count++;
            }
            else {
                result += currentLetter + count;
                count = 1;
            }

            currentLetter = nextLetter;
        }

        result += currentLetter + count;

        if (i !== words.length - 1)
            result += ' ';
    }

    return result;
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };