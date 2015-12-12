// does recursion
var recursiveFunction = function recursiveFunction () {
    if (typeof theFunctionToCall !== 'function') {
        if (window.confirm('Unable to locate function. Click OK to call a recursive function.')) {
            return recursiveFunction();
        }
    }
};