/**
 * Tests if the number is negative.
 * @param {number} arg - Number to test.
 * @return {boolean}
 * @see {@link http://redd.it/3l27yd}
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var isNegative = function(arg) {
    var p = arg.toString();

    return p[0] == '-';
};

anything.prototype.isNegative = isNegative;
