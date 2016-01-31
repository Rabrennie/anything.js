/* product all the arguments passed in to the function
usage:  product(1, 2) returns 2
        product(1, 2, 3) returns 6
        product(1, 2, 3, 4) returns 24
*/
var product = function () {
    var args = Array.prototype.slice.call(arguments);
    var product = args.reduce(function (a, b) {
        return a * b;
    });
    return product;
}

anything.prototype.product = product