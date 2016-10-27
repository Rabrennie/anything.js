/**
 * Returns the number of letters in a word
 * @param {String} The word to test.
 * @returns {Number} The number of letters in the word 
 */
var numberOfLettersInTheWord = function(word) {
    var numberOfLetters = 0;
    if (typeof word === 'string') {
        return (word.match(/[a-zA-Z]/g) || []).length;
    }
    return numberOfLetters;
}
anything.prototype.numberOfLettersInTheWord = numberOfLettersInTheWord;
