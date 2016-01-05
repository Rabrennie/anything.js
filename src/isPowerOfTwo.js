
var isPowerOfTwo = function(x){
	return !(x & (x-1));
};

anything.prototype.isPowerOfTwo = isPowerOfTwo;
