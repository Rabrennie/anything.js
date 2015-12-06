var getFlatColorGrey = function () {
	var grey = [
		'#ECECEC', // WHITE SMOKE
		'#6C7A89', // LYNCH
		'#D2D7D3', // PUMICE
		'#EEEEEE', // GALLERY
		'#BDC3C7', // SILVER SAND
		'#ECF0F1', // PORCELAIN
		'#95A5A6', // CASCADE
		'#DADFE1', // IRON
		'#ABB7B7', // EDWARD
		'#F2F1EF', // CARARRA
		'#BFBFBF'  // SILVER
	];
	return grey[Math.floor(Math.random() * grey.length)];
}

anything.prototype.getFlatColorGrey = getFlatColorGrey;
