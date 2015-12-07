var flattenArray = function (arr, result) {
    result = result || [];
  
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
  
    return result;
};

anything.prototype.flattenArray = flattenArray;
