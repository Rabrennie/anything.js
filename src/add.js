var add = function add () {
    var result = 0;
    var numbers = Array.prototype.slice.call(arguments, 1);
    numbers.forEach( function (val) {
        result += (!isNaN(val) ? val : 0);
    });
    return result;
};
anything.prototype.add = add;

