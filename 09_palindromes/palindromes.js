const palindromes = function (phrase) {
    phrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()/\s]/g,"").toLowerCase();
    return reverseString(phrase) == phrase;
};


const reverseString = function(input) {
    let reverseInput = ""
    for (let index = 0; index < input.length; index++) {
        let letter = input.charAt(index);
        if (index == 0) {
            reverseInput = letter;
        } else {
            reverseInput = letter + reverseInput;
        }  
    }
    return reverseInput;
};


// Do not edit below this line
module.exports = palindromes;
