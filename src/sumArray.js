/* Sums up and returns all the values in the array passed into the function
usage:  sumArray([1,2]) returns 3
        sumArray([1, 2, 3]) returns 6
        sumArray([1, 2, 3, 4]) returns 10
*/

var sumArray = function (array) {
  var response = 0;
  for (i in array) {
    response += array[i];
  }
  return response;
}

anything.prototype.sumArray = sumArray;
