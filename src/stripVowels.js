var stripVowels = function (str) {
    var vowels = ['a','e','i','o','u'];
    var result = [];

    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) === -1) {
            result.push(str[i]);
        }
    }
    
    return result.join('');
};

anything.prototype.stripVowels = stripVowels;
