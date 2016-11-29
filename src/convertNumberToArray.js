/*
sample input : 
	convertNumberToArray(3);
will return :
	[1, 2, 3]
*/

var convertNumberToArray = function convertNumberToArray(n) {
    var arr = [];
    if (!isNaN(n)) {
        n = parseInt(n);
        for (var i = 0; i < n; i++) {
            arr.push(i);
        }
    }

    return arr;
};


anything.prototype.convertNumberToArray = convertNumberToArray;