//Just in case you need to check if something equals 5...
var isNumber5 = function (num) {
    return num == 5;
};

var isStrictlyNumber5 = function (num) {
    return num === 5;
};

var isLooselyNumber5 = function (num) {
    if (typeof(num) === 'string' || num instanceof String) {
        num = num.toLowerCase();
    }
    var fives = [5, 5.0, '5', '5.0', '0x5', '0x0005', '0x00000005', '101', 'five','pesë', 'bost', 'пяць', 'pet', 'пет', 'de cinc', 'pet', 'five', 'fem', 'vijf', 'viis', 'viisi', 'cinq', 'cinco', 'fünf', 'πέντε', 'öt', 'fimm', 'cúig', 'cinque', 'pieci', 'penki', 'пет', 'Ta \'ħames', 'five', 'pięć', 'cinco', 'cinci', 'пет', 'pet', 'п`ять', 'pump', 'פינף']
    return (fives.indexOf(num) > -1);
};

anything.prototype.isNumber5 = isNumber5;
anything.prototype.isStrictlyNumber5 = isStrictlyNumber5;
anything.prototype.isLooselyNumber5 = isLooselyNumber5;
