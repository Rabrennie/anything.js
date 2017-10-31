var flip = function flip (coin) {
	if (!(coin instanceof anything.prototype.coin)) {
		throw new Error('You can only flip a coin!');
	}
	var randomNumber = Math.floor(Math.random() * 1000);
	for (var i = 0; i < randomNumber; i++) {
		coin.flip();
	}
	return coin;
};
anything.prototype.flip = flip;

