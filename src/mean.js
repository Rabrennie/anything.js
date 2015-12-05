var mean = function (numArr) {
    if(!Object.prototype.toString.call(numArr) === "[object Array]"){ 
        return false;	
    }
    
	  return numArr.reduce(function(previousVal, currentVal){return previousVal + currentVal;}) / numArr.length;
};

anything.prototype.mean = mean;
