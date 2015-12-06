
var standardDeviation = function(numArr) {

    //ensure number array
    if (!Object.prototype.toString.call(numArr) === "[object Array]")
        return false;

    //get mean
    var mean = numArr.reduce(function(previousVal, currentVal){return previousVal + currentVal;}) / numArr.length;

    var sumOfDiffSquared = 0;
    for (var i = 0; i < numArr.length; i++){
        diff = numArr[i] - mean;
        diffSquared = Math.pow(diff, 2);
        sumOfDiffSquared += diffSquared;
    }

    var variance = sumOfDiffSquared / (numArr.length - 1);
    return Math.sqrt(variance);

}

anything.prototype.standardDeviation = standardDeviation;
