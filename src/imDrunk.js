var imDrunk = function() {
    var body = document.querySelector('body');
    var duration = 1500;
    var drinks = 0;
    body.style['transition'] = 'all ' + duration + 'ms ease-in-out';

    var stumble = function() {
        drinks++;
        var visionImpairment =  Math.floor(Math.random() * 10) + 1;
        var shitFacedFactor =  (Math.floor(Math.random() * (95 - 50 + 1) + 50)) / 100;
        var swayFactor = (Math.floor(Math.random() * (105 - 95 + 1) + 95)) / 100;
        var roomSpin = Math.floor(Math.random() * (20 * drinks)) + 1;
        roomSpin *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

        body.style['-webkit-transform'] = 'rotate(' + roomSpin + 'deg) scale(' + swayFactor + ')';
        body.style['transform'] = 'rotate(' + roomSpin + 'deg) scale(' + swayFactor + ')';
        body.style['-webkit-filter'] = 'blur(' + visionImpairment + 'px)';
        body.style['filter'] = 'blur(' + visionImpairment + 'px)';
        body.style['opacity'] = shitFacedFactor;
    };

    var soberUp = function() {
        body.style['-webkit-transform'] = '';
        body.style['-webkit-filter'] = '';
        body.style['filter'] = '';
        body.style['transform'] = '';
        body.style['opacity'] = '';

        if (interval) {
            clearInterval(interval);
            interval = null;
            drinks = 0;
        }
    };

    var interval = setInterval(stumble, duration);
    setTimeout(soberUp, 10000);

    stumble();
};

anything.prototype.imDrunk = imDrunk;