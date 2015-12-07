var uniqueValues = function (arr) {
    var result = arr.reduce(function (prev, cur) {
        if (Object.keys(prev[cur]) === undefined) {
            prev[cur] = 1;
        } else {
            prev[cur] += 1;
        }
        
        return prev;
    }, {});
    
    return result;
};

anything.prototype.uniqueValues = uniqueValues;
