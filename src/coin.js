var coin = function coin () {
    var self = this;
  	
  	headsUp = false;

  	self.flip = function flip () {
  		headsUp = !headsUp;
  	};

  	self.isHeadsUp = function isHeadsUp() {
  		return headsUp;
  	};

  	self.isTailsUp = function isTailsUp() {
  		return isTailsUp;
  	};
};
anything.prototype.coin = coin;

