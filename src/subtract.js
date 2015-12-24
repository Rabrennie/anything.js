/* function subtract receives any amount of argumetns,
* subtracts any amount given of numbers from the first argument */
var subtract = function subtract () {
    var result = !isNaN(arguments[0]) ? arguments[0] : 0;
    var numbers = Array.prototype.slice.call(arguments, 1);
    numbers.forEach( function (val) {
        result -= (!isNaN(val) ? val : 0);
    });
    return result;
};
anything.prototype.subtract = subtract;

