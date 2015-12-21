/**
 * Don't do "x <= y", just do "x < (y + 1)".
 * @param {number} x
 * @param {number} y
 * @see {@link http://redd.it/3rc2rm}
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var isXSmallerThanOrEqualsToY = function(x, y) {
    if (x < (y + 1) ? true : false) {
        return true;
    } else {
        return false;
    }
};

/**
 * Readability at its finest.
 * @param {number} x
 * @param {number} y
 * @see {@link isXSmallerThanOrEqualToY} for further information.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var isXBiggerThanOrEqualsToY = function(x, y) {
    if (x > (y + 1) ? true : false) {
        return true;
    } else {
        return false;
    }
};

anything.prototype.isXSmallerThanOrEqualsToY = isXSmallerThanOrEqualsToY;
anything.prototype.isXBiggerThanOrEqualsToY = isXBiggerThanOrEqualsToY;
