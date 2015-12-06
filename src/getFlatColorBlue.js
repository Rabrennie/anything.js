var getFlatColorBlue = function () {
	var blue = [
		'#446CB3', // SAN MARINO
		'#4183D7', // ROYAL BLUE
		'#59ABE3', // PICTON BLUE
		'#81CFE0', // SPRAY
		'#52B3D9', // SHAKESPEARE
		'#C5EFF7', // HUMMING BIRD
		'#22A7F0', // PICTON BLUE
		'#3498DB', // CURIOUS BLUE
		'#2C3E50', // MADISON
		'#19B5FE', // DODGER BLUE
		'#336E7B', // MING
		'#22313F', // EBONY CLAY
		'#6BB9F0', // MALIBU
		'#1E8BC3', // SUMMER SKY
		'#3A539B', // CHAMBRAY
		'#34495E', // PICKLED BLUEWOOD
		'#67809F', // HOKI
		'#2574A9', // JELLY BEAN
		'#1F3A93', // JACKSONS PURPLE
		'#89C4F4', // JORDY BLUE
		'#4B77BE', // STEEL BLUE
		'#5C97BF'  // FOUNTAIN BLUE
	];
	return blue[Math.floor(Math.random() * blue.length)];
}

anything.prototype.getFlatColorBlue = getFlatColorBlue;
