/**
 * A very rudimentary DOM-based "renderer".
 * 
 * Here's some demo code:
 * 
    var ctx = domRenderer(999);

    var icon = ctx.entity(
        window.innerWidth / 2 - 64,
        window.innerHeight / 2 - 64,
        128,
        128,
        'url(assets/tb_icon.png)'
    );

    var req;

    function update(t) {
        icon.x += 5 * Math.cos(t / 500);
        icon.y += 5 * Math.cos(2 * t / 500) / 2;
        req = window.requestAnimationFrame(update);
    }

    update(0);

    window.addEventListener('keyup', function(e) {
        if (e.keyCode == 27) {
            window.cancelAnimationFrame(req);
            while (ctx.root.domElement.firstChild) {
                ctx.root.domElement.removeChild(ctx.root.domElement.firstChild);
            }
        }
    }, false);
 *
 * The above will show the anything.js logo center-screen,
 * moving along an infinity path (lemniscate of Bernoulli).
 * Exit the demo by pressing the escape key.
 */

/**
 * Create new DOM renderer.
 * 
 * @param {number} [zIndex=999] - Default z-index of created elements
 */
var domRenderer = function(zIndex) {
    var _zIndex = zIndex || 999;

    /**
     * ELEMENT
     * 
     * Base element that defines... elementary properties.
     */
    function Element() {
        var _width, _height;

        this.domElement = document.createElement('div');
        this.domElement.style.overflow = 'hidden';
        this.domElement.style.margin = 0;
        this.domElement.style.padding = 0;

        Object.defineProperties(this, {
            width : {
                get : function get_width() {
                    return _width;
                },
                set : function set_width(width) {
                    _width = width;
                    this.domElement.style.width = _width + 'px';
                    return _width;
                }
            },
            height : {
                get : function get_height() {
                    return _height;
                },
                set : function set_height(height) {
                    _height = height;
                    this.domElement.style.height = _height + 'px';
                    return _height;
                }
            }
        });
    }

    /**
     * A shorthand for adding event listeners, just in case.
     * 
     * @param {string} event - Event type to listen for
     * @param {function} callback - Callback function executed by event firing
     */
    Element.prototype.on = function (event, callback) {
        this.domElement.addEventListener(event, callback, false);
    };

    /**
     * CONTEXT
     * 
     * Rendering context, or rather the layer that other elements are
     * appended to.
     */
    function Context() {
        Element.call(this);

        document.body.appendChild(this.domElement);

        this.domElement.setAttribute('id', 'dom-renderer');

        this.width = 0;
        this.height = 0;
    }

    Context.prototype = Object.create(Element.prototype);
    Context.prototype.constructor = Context;

    /**
     * ENTITY
     * 
     * A basic entity.
     * 
     * @param {number} x - X-position (the ˙left` style property is used)
     * @param {number} y - Y-position (the `top` syle property is used)
     * @param {number} width - Entity width
     * @param {number} height - Entity height
     * @param {string} graphic - A string for the background CSS property (e.g. '#fff', 'rgba(255, 127, 0, 0.5)', 'url(myimage.png)')
     */
    function Entity(root, x, y, width, height, graphic) {
        Element.call(this);

        var _x, _y, _graphic;

        Object.defineProperties(this, {
            x : {
                get : function get_x() {
                    return _x;
                },
                set : function set_x(x) {
                    _x = x;
                    this.domElement.style.left = _x + 'px';
                    return _x;
                }
            },
            y : {
                get : function get_y() {
                    return _y;
                },
                set : function set_y(y) {
                    _y = y;
                    this.domElement.style.top = _y + 'px';
                    return _y;
                }
            },
            graphic : {
                get : function get_graphic() {
                    return _graphic;
                },
                set : function set_graphic(graphic) {
                    _graphic = graphic;
                    this.domElement.style.background = graphic;
                    return _graphic;
                }
            }
        });

        root.appendChild(this.domElement);

        this.domElement.style.position = 'fixed';
        this.domElement.style.zIndex = _zIndex;

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.graphic = graphic || '#fff';

    }

    Entity.prototype = Object.create(Element.prototype);
    Entity.prototype.constructor = Entity;

    /**
     * SPRITE
     */

    function Sprite(root, x, y, width, height, graphic) {
        Entity.call(this, root, x, y, width, height, graphic);

        var _animations = {},
            _currentAnimation = {},
            _currentFrame = 0,
            _currentFrameIndex = 0,
            _timeAccumulator = 0,
            _previousTime = Date.now(),
            _currentTime = 0;

        _animations = {};
        _currentAnimation = {};
        _timeAccumulator = 0;

        this.setAnimation = function(name, frames, frameRate) {
            _animations[name] = { frames : frames, frameRate : frameRate };
        };

        this.useAnimation = function(name) {
            _currentAnimation = _animations[name];
            _currentFrameIndex = 0;
            _currentFrame = _currentAnimation.frames[_currentFrameIndex];
            this.domElement.style.backgroundPositionX = _currentFrame * width + 'px';
        };

        this.animate = function(t) {
            _currentTime = Date.now();
            _timeAccumulator += _currentTime - _previousTime;
            _previousTime = _currentTime;
            if (_timeAccumulator >= 1000 / _currentAnimation.frameRate) {
                _timeAccumulator = 0;
                _currentFrameIndex++;
                if (_currentFrameIndex >= _currentAnimation.frames.length) {
                    _currentFrameIndex = 0;
                }
                _currentFrame = _currentAnimation.frames[_currentFrameIndex];
                this.domElement.style.backgroundPositionX = -_currentFrame * width + 'px';
            }
        };
    }

    Sprite.prototype = Object.create(Entity.prototype);
    Sprite.prototype.constructor = Sprite;

    /**
     * We're done setting up. Create a new context and return.
     */

    var _context = new Context();

    return {
        root : _context,
        entity : function (x, y, width, height, graphic) {
            return new Entity(_context.domElement, x, y, width, height, graphic);
        },
        sprite : function (x, y, width, height, graphic) {
            return new Sprite(_context.domElement, x, y, width, height, graphic);
        }
    }
};

anything.prototype.domRenderer = domRenderer;