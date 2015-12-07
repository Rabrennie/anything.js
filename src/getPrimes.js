var getPrimes = function(n) {
    // Eratosthenes algorithm to find all primes less than n
    var isPrime = [];
    var max = Math.sqrt(n);
    var primeNumbers = [];

    // initialize all numbers to be prime
    for(var i = 0; i < n; i++) {
        isPrime.push(true);
    }

    for(var i = 2; i <= max; i++) {
        if(isPrime[i]) {
            for(var j = i*i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for(var i = 2; i < n; i++) {
        if(isPrime[i]) {
            primeNumbers.push(i)
        }
    }

    return primeNumbers;
}

anything.prototype.getPrimes = getPrimes;
