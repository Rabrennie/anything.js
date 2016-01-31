/**
 * Returns the length of a String or Array.
 * @param {string|Array} stringOrArray - A String or Array.
 * @return {number} The length of a String or Array.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var getLengthOfStringOrArray = function(stringOrArray) {
    if ('string' == typeof stringOrArray || stringOrArray instanceof Array) {
        var counter = 0;
        
        for (var i = 0; i < stringOrArray.length; ++i) {
            counter += 1;
        }
        
        return counter;
    }
};

anything.prototype.getLengthOfStringOrArray = getLengthOfStringOrArray;
