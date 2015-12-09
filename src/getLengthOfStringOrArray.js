var getLengthOfStringOrArray = function(stringOrArray) {
    if ('string' == typeof stringOrArray || stringOrArray instanceof Array) {
        var counter = 0;
        
        for (var i = 0; i < stringOrArray.length; ++i) {
            counter += 1;
        }
        
        return counter;
    }
};

anything.prototype.getLengthOfStringOrArray = getLengthOfStringOrArray;
