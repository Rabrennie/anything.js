// Returns a rubber duck & its motivating words.
// Made by CharmaineLee

var rubberDuckMe = function() {
  	// rubber ducky's motivating words
	var debug = [
				"Talk me through your code line by line.", 
      			"I'm here for you.", 
      			"Give it another thought.", 
      			"I see a problem with that line over there."
				]	
    	return debug[Math.floor(Math.random()*debug.length)];
}			

anything.prototype.rubberDuckMe = rubberDuckMe;
