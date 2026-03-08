// Function to convert string to TitleCase
function toTitleCase(str) {
    let words = str.split (" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
       let word = words [i];
       let firstLetter = word.charAt(0).toUpperCase ( );
       let restLetters =word.slice(1).toLowerCase( );
       result.push(firstLetter + restLetters); 
    }
    return result.join(" ");
}

// Function to count vowels
function countVowels (str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count ++;
        }
    }
    return count;
}

// Function to reverse a string
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed;
}

// Testing all the functions
console.log(toTitleCase ("Welcome to M4ACE javascript class"));
console.log(countVowels("Welcome to Backend javascript class"));
console.log(reverseString("M4ACE Backend 2026 class"));