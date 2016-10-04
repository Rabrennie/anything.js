// Returns a rubber duck's motivating words - optimized for rubber duck debugging
// Made by CharmaineLee

var rubberDuckMe = function(){
    var duckQuotes = getDuckQuotes();
    var rand = Math.floor(Math.random()*duckQuotes.length);
    console.log(duckQuotes[rand]);
};

// rubber ducky's motivating words
function getDuckQuotes() {
    var debug = [];
    debug.push('Talk me through your code line by line.');
    debug.push("I'm here for you.");
    debug.push('Give it another thought.');
    debug.push('I see a problem with that line over there.');  
    return debug;
}

anything.prototype.rubberDuckMe = rubberDuckMe;
