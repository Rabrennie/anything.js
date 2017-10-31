/**
 * Plays the highCard game and returns the results.
 * @returns {Object} the results of playing highCard
 */
var highCard = function highCard (players) {
    var deck = Δ.deck(),
    	results = {},
    	highestCardValue = -1;

    if (players > 52 || players < 1) {
    	throw new Error('You have to play this game with at least 1 player and less than 52.');
    }

    for (var i = 0; i < players; i++) {
    	var index = Math.floor(Math.random()*deck.length);
    	var card = deck[index];
    	deck.splice(index, 1);
    	results['player' + (i + 1)] = {
    		card: card
    	};
    	if (card.value >= highestCardValue) {
    		highestCardValue = card.value;
    	}
    }

    for (var i = 0; i < players; i++) {
    	var playerResult = results['player' + (i + 1)];
		results['player' + (i + 1)].winner = playerResult.card.value === highestCardValue;
    }
    return results;
};
anything.prototype.highCard = highCard;

