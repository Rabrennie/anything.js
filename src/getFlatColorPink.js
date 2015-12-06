var getFlatColorPink = function () {
	var pink = [
		'#DB0A5B', // RAZZMATAZZ
		'#FF64747', // SUNSET ORANGE
		'#F1A9A0', // WAX FLOWER
		'#D2527F', // CABARET
		'#E08283', // NEW YORK PINK
		'#F62459', // RADICAL RED
		'#E26A6A' // SUNGLO
	];
	return pink[Math.floor(Math.random() * pink.length)];
}

anything.prototype.getFlatColorPink = getFlatColorPink;
