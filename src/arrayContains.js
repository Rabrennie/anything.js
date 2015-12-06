var arrayContains = function (array, elem) {
	for(var i=0; i < array.length; i++){
		if (array[i] === elem) {
      	  return true;
    	}
  	}
    return false;
}

anything.prototype.arrayContains = arrayContains;
