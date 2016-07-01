function rot(string, rotAmount){
	var alphabetupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var alphabetlower = "abcdefgjijklmnopqrstuvwxyz";
	var newString = "";
	for(i = 0; i < string.length; i++){
		var index = alphabetupper.indexOf(string[i]);
		if(index >= 0){
			newString += alphabetupper[(index + rotAmount) % alphabetupper.length];
		}
		index = alphabetlower.indexOf(string[i]);
		if(index >= 0){
			newString += alphabetlower[(index + rotAmount) % alphabetlower.length];
		}
	}
	return newString;
}

//Macro for the most common rot
//"Its like rot13 but twice as secure"
function rot26(string){
	return rot(string, 52);
}

anything.prototype.rot26 = rot26;
