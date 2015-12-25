var fizz = 'Fizz';
var buzz = 'Buzz';
/**
 * Deprecated, replaced with generalized algorithm.
 */
var _fizzbuzz = function (i) {
    // fire an ultra-difficult algorithm to either print Fizz, Buzz, FizzBuzz or the number
    return (i % 15 === 0 ? fizz + buzz : (i % 5 === 0 ? buzz : (i % 3 === 0 ? fizz : i)));
};

var fizzbuzz = function () {
    // replaced with generalized function
    /*for (var i = 0; i <= 100; i++) {
        console.log(_fizzbuzz(i));
    }*/ 
    printGeneralFizzBuzz(100, {Fizz: 3, Buzz: 5});
};

/**
 * Computes the general ith fizzbuzz, with the given factors
 * of the form {label: factor, ...}
 */
var generalFizzBuzz = function(i, factors) {
    var text = '';
    for(var label in factors) {
        if(factors.hasOwnProperty(label)) {
            if(i % factors[label] === 0)
                text += label;
        }
    }
    return text.length === 0 ? i + '' : text;
}

var printGeneralFizzBuzz = function(n, factors) {
    for (var i = 0; i <= n; i++) {
        console.log(generalFizzBuzz(i, factors));
    }
}

anything.prototype.generalFizzBuzz = generalFizzBuzz;
anything.prototype.generalFizzBuzz = printGeneralFizzBuzz;
anything.prototype.fizzbuzz = fizzbuzz;
