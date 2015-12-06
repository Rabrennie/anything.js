var getFlatColorPurple = function () {
	var purple = [
		'#DCC6E0', // SNUFF
		'#663399', // REBECCAPURPLE
		'#674172', // HONEY FLOWER
		'#AEA8D3', // WISTFUL
		'#913D88', // PLUM
		'#9A12B3', // SEANCE
		'#BF55EC', // MEDIUM PURPLE
		'#BE90D4', // LIGHT WISTERIA
		'#8E44AD', // STUDIO
		'#9B59B6'  // WISTERIA
	];
	return purple[Math.floor(Math.random() * purple.length)];
}

anything.prototype.getFlatColorPurple = getFlatColorPurple;
