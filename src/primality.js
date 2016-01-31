/**
 * Verifies if a number is prime in O(1) time.
 */

var isPrime = function(n) {
    if(n <= 1)
        return false;
    else
        return n === 2 ||   // 2 is the only even prime, 
                            // so it is special-cased
               n % 2 !== 0; // based on the well-known theorem that
                            // all odd numbers are prime
}

anything.prototype.isPrime = isPrime;