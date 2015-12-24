/**
 * Quickly solves math problems through estimation
 * @param {String} expression (e.g. '12 * 9')
 * @return {Number} answer
 * @author Trey Hoover <treyhoover@gmail.com>
 */

function doQuickMath(expression) {
    expression = expression.replace(/\s/g, ''); // spaces only slow math down
    var operatorExp = '[\+|-|\*|\/|%]';
    var numberExp = '[-+]?[0-9]*\.?[0-9]';
    var validExpression = new RegExp('^' + numberExp + operatorExp + numberExp + '$').test(expression);
    if (!validExpression) throw 'Invalid expression';

    var idx = expression.search(operatorExp);
    var operand1 = quickRound(expression.slice(0, idx));
    var operator = expression.slice(idx, idx + 1);
    var operand2 = quickRound(expression.slice(idx + 1));

    return eval(operand1 + operator + operand2);
}

// the magic that makes it so fast
function quickRound(n) {
    n = parseInt(n); // parse as integer for more fastness
    var roundyness = Math.pow(10, Math.abs(n).toString().length - 1); // this is highly technical
    return Math.round(n / roundyness) * roundyness;
}

anything.prototype.doQuickMath = doQuickMath;
