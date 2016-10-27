/**
 * Returns the number of letters in a word
 * @returns {Number} The number of letters in the word "cat"
 */
var numberOfLettersInTheWord = function(word) {
  var numberOfLetters = 0;
  if (typeof word === 'string') {
    return (word.match(/[a-zA-Z]/g) || []).length;
  }
  return numberOfLetters;
}
anything.prototype.numberOfLettersInTheWord = numberOfLettersInTheWord;
