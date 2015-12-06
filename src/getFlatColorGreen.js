var getFlatColorGreen = function () {
	var green = [
		'#4ECDC4', // MEDIUM TURQUOISE
		'#A2DED0', // AQUA ISLAND
		'#87D37C', // GOSSIP
		'#90C695', // DARK SEA GREEN
		'#26A65B', // EUCALYPTUS
		'#03C9A9', // CARIBBEAN GREEN
		'#68C3A3', // SILVER TREE
		'#65C6BB', // DOWNY
		'#1BBC9B', // MOUNTAIN MEADOW
		'#1BA39C', // LIGHT SEA GREEN
		'#66CC99', // MEDIUM AQUAMARINE
		'#36D7B7', // TURQUOISE
		'#C8F7C5', // MADANG
		'#86E2D5', // RIPTIDE
	    '#2ECC71', // SHAMROCK
		'#16A085', // NIAGARA
		'#3FC380', // EMERALD
		'#019875', // GREEN HAZE
		'#03A678', // FREE SPEECH AQUAMARINE
		'#4DAF7C', // OCEAN GREEN
		'#2ABB9B', // NIAGARA 1
		'#00B16A', // JADE
		'#1E824C', // SALEM
		'#049372', // OBSERVATORY
		'#26C281'  // JUNGLE GREEN
	];
	return green[Math.floor(Math.random() * green.length)];
}

anything.prototype.getFlatColorGreen = getFlatColorGreen;
