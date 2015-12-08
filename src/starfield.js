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
            Math.random() * window.innerWidth - 32,
            Math.random() * window.innerHeight - 32,
            32,
            32,
            'url(assets/star.png)'
        );

        _sprite.setAnimation('blink', [0, 1, 2, 1], Math.floor(Math.random() * 10) + 5);
        _sprite.useAnimation('blink');

        _sprite.angle = Math.random() * 360;
        _sprite.scale = Math.random() * 0.5 + 0.5;

        /**
         * Steps through animation frames when updated.
         */
        this.update = function() {
            _sprite.animate();
        };
    }
    
    var _context = context || domRenderer(999);
    
    // Create an array of randomly positioned stars
    var stars = Array.apply(null, Array(25)).map(function() {
        return new Star(ctx);
    }, 0);

    /**
     * Updates starfield.
     */
    function update(t) {
        stars.forEach(function(e) {
            e.update();
        });

        window.requestAnimationFrame(update);
    }

    update(0);
};

anything.prototype.starfield = starfield;
