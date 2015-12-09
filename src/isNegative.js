/**
 * Tests if the number is negative.
 * @param {Number} arg - Number to test.
 * @returns {Boolean}
 * @see {@link http://redd.it/3l27yd}
 */
var isNegative = function(arg) {
    var p = arg.toString();

    return p[0] == '-';
};

anything.prototype.isNegative = isNegative;
