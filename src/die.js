var defaultSides = 6,
	die = function die(sides) {
	    var self = this;
	    self.sides = sides || defaultSides;

	    self.roll = function roll() {
	    	return Math.floor(Math.random() * (self.sides ) + 1);
	    };

	    self.roll.cheat = function (cheatSide) {
	    	if (cheatSide <= 0) {
	    		throw new Error('You can\'t cheat that badly! (You can only use a positive side).');
	    	}
	    	if (cheatSide > self.sides) {
	    		throw new Error('You can\'t cheat that badly! (Your die has only ' + self.sides + ' sides).');
	    	}
	    	return cheatSide;
	    }
	};
anything.prototype.die = die;

