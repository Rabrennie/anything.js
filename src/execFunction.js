/*
    define a function that takes two arguments and return a single result
    apply the function to all the argument of the function
    eg. 
        function sumNew(a, b) { return a + b; }
        Δ.execFunction(sumNew, 1, 2, 3, 4) returns 10
        Δ.execFunction(sumNew, 1, 2, 3, 4, 5) returns 15
*/

function execFunction(func) {
    var args = Array.prototype.slice.call(arguments, 1);
    var result = args.reduce(func);
    return result;
}

anything.prototype.execFunction = execFunction;