// Olajide Oluwaseun David

// Function to check if a word is a palindrome
function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}

console.log(isPalindrome("jugging"));
console.log(isPalindrome("repaper"));
console.log(isPalindrome("No lemon, no melon"));
console.log(isPalindrome("level"));




// Improved version of the palindrome function that ignores case and non-alphanumeric characters
function isPalindrome(word) {
    let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

if (word === reversed) {
    return true;
} else {
    return false;
}
}

console.log(isPalindrome("fork"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("dad"));
console.log(isPalindrome("rotator"));





// Improved version of the palindrome function that ignores case and non-alphanumeric characters
function isPallindrome(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = clean.split('').reverse().join('');
    return clean === reversed;
}
console.log(isPalindrome("step on no pets"));
console.log(isPalindrome("dewed"));
console.log(isPalindrome("colour"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("reviver"));