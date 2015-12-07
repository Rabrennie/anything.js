var fibonacci = function(n) {
    if(!(n>0)){
        return false;
    }
    var a, b, res;
    a = b = 1;
    for (var i = 3; i <= n; i++) {
        res = a + b;
        a = b;
        b = res;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    return res;
}
anything.prototype.fibonacci = fibonacci;
