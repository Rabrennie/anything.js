var getFlatColorYellow = function () {
	var yellow = [
		'#F5D76E', // CREAM CAN
		'#F7CA18', // RIPE LEMON
		'#F4D03F'  // SAFFRON
	];
	return yellow[Math.floor(Math.random() * yellow.length)];
}

anything.prototype.getFlatColorYellow = getFlatColorYellow;
