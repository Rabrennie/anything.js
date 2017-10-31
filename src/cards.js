var card = function card(value, suit) {
	var self = this;
	self.value = value;
	self.suit = suit;
	return self;
};

var deck = function deck() {
	var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
	var suits = [1,2,3,4];

	var deck = [];
	for (var i = 0; i < values.length; i++) {
		for (var j = 0; j < suits.length; j++) {
			deck.push(new card(values[i], suits[j]));
		}
	}
	return deck;
};

anything.prototype.deck = deck;
anything.prototype.card = card;