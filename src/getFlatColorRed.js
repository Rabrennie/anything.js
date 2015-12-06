var getFlatColorRed = function () {
	var red = [
		'#D24D57', // CHESTNUT ROSE
		'#F22613', // POMEGRANATE
		'#D91E18', // THUNDERBIRD
		'#96281B', // OLD BRICK
		'#EF4836', // FLAMINGO
		'#D64541', // VALENCIA
		'#C0392B', // TALL POPPY
		'#CF000F', // MONZA
		'#E74C3C'  // CINNABAR
	];
	return red[Math.floor(Math.random() * red.length)];
}

anything.prototype.getFlatColorRed = getFlatColorRed;