/**
 * This should create a 'starfield' with the DOM renderer.
 * 
 * @param {object} [context=domRenderer] - DOM renderer context, created by default if not supplied
 */
var starfield = function(context) {
    /**
     * Describes a star.
     * 
     * @param {object} context - DOM renderer context
     */
    function Star(context) {
        var _sprite;

        _sprite = context.sprite(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight,
            32,
            32,
            'url(assets/star.png)'
        );

        _sprite.setAnimation('blink', [0, 1, 2, 1], Math.floor(Math.random() * 10) + 5);
        _sprite.useAnimation('blink');

        this.update = function(t) {
            _sprite.animate(t);
        };
    }
    
    var _context = context || domRenderer(999);
    
    // Create an array of 50 randomly positioned stars
    var stars = Array.apply(null, Array(50)).map(function() {
        return new Star(ctx);
    }, 0);

    /**
     * Updates starfield.
     * 
     * @param {number} t - Timestep
     */
    function update(t) {
        stars.forEach(function(e) {
            e.update(t);
        });

        window.requestAnimationFrame(update);
    }

    update(0);
};

anything.prototype.starfield = starfield;
