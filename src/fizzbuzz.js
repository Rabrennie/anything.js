var fizzbuzz = function () {
    // fire an ultra-difficult algorithm to either print Fizz, Buzz, FizzBuzz or the number
    for (var i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
};

anything.prototype.fizzbuzz = fizzbuzz;
