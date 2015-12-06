/*translates English into Meow
 *
 * examples:
 * meowify('Hello world!') => 'Meow meow'
 * meowify('Areallylongword areallylongword aREALLYlongword') => 'Meoweoww meoweowew mEOWWOwoow'
 *
 * note:
 * it is not in the cat culture to use punctuation so punctuation marks are disregarded
*/
var meowify = function(sentence) {
  var normalWords = sentence.split(' ');
  meowifiedWords = [];

  for (var i = 0; i < normalWords.length; i++) {
    var curr = normalWords[i];

    var wordCase, len;
    if (meowIsLowercase(curr)) {
      wordCase = 'L';
    } else if (meowIsUppercase(curr)) {
      wordCase = 'U';
    } else if (meowIsCapitalized(curr)) {
      wordCase = 'C';
    } else {
      wordCase = 'M';
    }

    if (meowIsLong(curr)) {
      len = 'L';
    } else {
      len = 'S';
    }

    var key = wordCase + len + 'M';
    meowifiedWords.push(meowbelFish[key]);
  }

  return meowifiedWords.join(' ');
}

anything.prototype.meowify = meowify;

// helper maps and functions
meowbelFish = {
  LSM: 'meow',
  USM: 'MEOW',
  CSM: 'Meow',
  MSM: 'mEOw',
  LLM: 'meoweowew',
  ULM: 'MEWOEWOW',
  CLM: 'Meoweoww',
  MLM: 'mEOWwOwoow'
}

var meowIsCapitalized = function(word) {
  return word.charAt(0).toUpperCase() === word.charAt(0);
}

var meowIsLowercase = function(word) {
  return word.toLowerCase() === word;
}

var meowIsUppercase = function(word) {
  return word.toUpperCase() === word;
}

var meowIsLong = function(word) {
  return word.length > 8;
}
