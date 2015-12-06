// returns random hex color
var randomHexColor = function() {
    var options = '0123456789ABCDEF'.split('');
    var randomHexColor = '#';
    for (var i = 0; i < 6; i++ ) {
            randomHexColor += options[Math.floor(Math.random() * 16)];
        }
    return randomHexColor;
}

anything.prototype.randomHexColor = randomHexColor;
