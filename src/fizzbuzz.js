var fizz = 'Fizz';
var buzz = 'Buzz';
var _fizzbuzz = function (i) {
    // fire an ultra-difficult algorithm to either print Fizz, Buzz, FizzBuzz or the number
    return (i % 15 === 0 ? fizz + buzz : (i % 5 === 0 ? buzz : (i % 3 === 0 ? fizz : i)));
};

var fizzbuzz = function () {
    for (var i = 0; i <= 100; i++) {
        console.log(_fizzbuzz(i));
    }
};

anything.prototype.fizzbuzz = fizzbuzz;
