/**
 * This should create a snowstorm with the DOM renderer.
 * 
 * @param {object} [context=domRenderer] - DOM renderer context, created by default if not supplied
 */
var letItSnow = function(context) {
    /**
     * Describes the snowflake.
     * 
     * @param {object} context - DOM renderer context
     * @param {number} size - Snowflake size
     * @param {number} speed - Snowflake speed
     */
    function Snowflake(context, size, speed) {
        var _entity, _size, _speed;

        _size = size;
        _speed = speed;

        _entity = context.entity(
            Math.random() * window.innerWidth,
            Math.random() * -window.innerHeight,
            size,
            size,
            '#fff'
        );
        
        /**
         * Updates snowflake position in window.
         * 
         * @param {number} t - Timestep
         */
        this.update = function(t) {
            if (_entity.x > window.innerWidth) {
                _entity.x = -_size;
            }
            if (_entity.y > window.innerHeight) {
                _entity.y = -_size;
            }
            _entity.x += speed * Math.cos(t / 500) + 1;
            _entity.y += 1 + _speed;
        };
    }
    
    var _context = context || domRenderer(999);
    
    // Create an array of 50 'randomly unique' snowflakes
    var _snowflakes = Array.apply(null, Array(50)).map(function() {
        return new Snowflake(_context, Math.floor(Math.random() * 10), Math.random());
    }, 0);

    /**
     * Updates snowstorm.
     * 
     * @param {number} t - Timestep
     */
    function update(t) {
        _snowflakes.forEach(function(e) {
            e.update(t);
        });

        window.requestAnimationFrame(update);
    }

    update(0);
};

anything.prototype.letItSnow = letItSnow;
