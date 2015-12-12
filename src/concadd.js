var concadd = function(anA, aB){
	//50% chance of concatenating as strings
	//50% chance of adding as floats
	//Just like actually programming in javascript but more consistent

	//simulate pseudo-random dice roll
	var rand = anything.getRandomNumberInsecure(1,6);
	if(rand <= 3){c
		//add as floats
		var result = parseFloat(anA) + parseFloat(aB);
	}else{
		//add as strings
		var result = String(anA) + String(aB);
	}
	return result;
}

anything.prototype.concadd = concadd;