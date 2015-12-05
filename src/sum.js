/* Sum all the arguments passed in to the function
usage:  sum(1, 2) returns 3
        sum(1, 2, 3) returns 6
        sum(1, 2, 3, 4) returns 10
*/
var sum = function () {
    var args = Array.prototype.slice.call(arguments);
    var total = args.reduce(function (a, b) {
        return a + b;
    });
    return total;
}

anything.prototype.sum = sum;