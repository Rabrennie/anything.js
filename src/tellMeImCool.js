var tellMeImCool = function() {
	var compliment = Math.floor(Math.random() * 6);

	switch(compliment) {
		case 0:
			return "You are super cool";
		case 1: 
			return "You are beautiful";
		case 2:
			return "You are popular and haters are just jealous";
		case 3:
			return "You are smart and nobody can stop you";
		case 4:
			return "You are seriously just so rad"
		case 5:
			return "I love you"
	}
};

anything.prototype.tellMeImCool = tellMeImCool;