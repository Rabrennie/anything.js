/* you will definitely need this */
var getAnimalNoise = function(){
    var all = ["arrooff", "arf", "aroo", "awk", "baa", "baraag", "beep",
                "bzzz", "caw", "chirp", "chirr", "cluck", "coo", "cuckcoo",
                "eeeaaah", "meow", "moo", "neigh", "oink", "ook", "owoooah",
                "purr", "quack", "squawk", "squeak", "woof"];
    return all[Math.floor(Math.random()*all.length)];
};

anything.prototype.getAnimalNoise = getAnimalNoise;
