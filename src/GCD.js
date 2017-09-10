/**
 * Calculate Greatest Common Divisor of 1 or more positive numbers
 * 
 * @param {Number} a - first number or and array of numbers
 * @param {Number} b - second number
 * @return {Number} Calculate Greatest Common of all the numbers
 */
var GCD = function() {
    function isPositiveInt(a) {
        return isFinite(a) && a % 1 == 0 && a >= 0;
    }

    // Calculates gcd of two numbers
    function gcdOfTwoNumbers(a, b) {
        if (!isPositiveInt(a) || !isPositiveInt(b))
            return NaN;
        while (b !== 0) {
            a %= b;
            var temp = a;
            a = b;
            b = temp;
        }
        return a;
    }

    // Calculate gcd of a lot of numbers
    function gcdOfArray(arr) {
        if (arr.length == 1)
            return gcdOfTwoNumbers(arr[0], arr[0]);
        
        var result = arr[0];
        for (var i = 1; i < arr.length; i++) {
            result = gcdOfTwoNumbers(result, arr[i]);
        }

        return result;
    }

    // No numbers -> NaN
    if (arguments.length == 0)
        return NaN;

    if (arguments.length == 1) {
        // One argument
        if (Object.prototype.toString.call(arguments[0]) === '[object Array]') {
            // We have an array of numbers
            return gcdOfArray(arguments[0]);
        } else {
            // We have not an array
            // Not number or float or negative? NaN!
            if (!isFinite(arguments[0]) || arguments[0] % 1 !== 0 || arguments[0] < 0)
                return NaN;
            // GCD of one Number is this number
            return arguments[0];
        }    
    } else {
        // A lot of arguments? Use all of them as an array and calc
        return gcdOfArray(arguments);
    }

}

anything.prototype.GCD = GCD;