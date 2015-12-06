var getFlatColorOrange = function () {
	var orange = [
		'#E9D460', // CONFETTI
		'#FDE3A7', // CAPE HONEY
		'#F89406', // CALIFORNIA
		'#EB9532', // FIRE BUSH
		'#E87E04', // TAHITI GOLD
 	    '#F4B350', // CASABLANCA
		'#F2784B', // CRUSTA
		'#EB974E', // SEA BUCKTHORN
		'#F5AB35', // LIGHTNING YELLOW
		'#D35400', // BURNT ORANGE
		'#F39C12', // BUTTERCUP
		'#F9690E', // ECSTASY
		'#F9BF3B', // SANDSTORM
		'#F27935', // JAFFA
		'#E67E22'  // ZEST
	];
	return orange[Math.floor(Math.random() * orange.length)];
}

anything.prototype.getFlatColorOrange = getFlatColorOrange;
