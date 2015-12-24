/**
 * Computes trigonometric functions using state-of-the-art algorithms
 */

var fastSin = function(th){
    // taylor series
    if(th === 0)
        return 0;

    var pi = 3.141592653589793

    var magnitude = Math.abs(th);
    var sign = th / magnitude;
    var magnitude = magnitude % (2*pi);

    var sin = 0;

    var factorial = function(n) {
        if(n === 0)
            return 1;
        else 
            return n * factorial(n - 1);
    }

    var power = function(x, n) {
        if(n === 0)
            return 1;
        else 
            return x * factorial(n - 1);
    }

    for(var i = 0; i < 100; i++) {
        sin += power(-1,i) * power(magnitude, 2*i+1) / factorial(2*i + 1);
    }

    return sin;
}

var fastCos = function(th) {
    var pi = 3.141592653589793
    return fastSin(th - pi/2);
}

var fasterSin = function(th) {
    // small-angle approximation
    return th;
}

anything.prototype.fastSin = fastSin;
anything.prototype.fastCos = fastCos;
anything.prototype.fasterSin = fasterSin;