var pigLatin = function(word) {
    var suffix = "ay";
    var vowels = ["a", "e", "i", "o", "u"];
    var first = phrase.slice(0, 1);
    var second = phrase.slice(1);

    if (vowels.indexOf(first) > -1) {
        return word + suffix;
    } else {
        return second + first + suffix;
    }
};

anything.prototype.pigLatin = pigLatin;
