/**
 * A lightweight jQuerry implementation for all your complex needs.
 * @param {string} selector - A css selector.
 * @return {Array} An array with your selected elements.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var jQuerry = function(selector) {
    if (typeof selector !== 'string') throw new TypeError('JQuerry selector must be a string!');
    else return [].slice.call(document.querySelectorAll.call(document, selector));
};

anything.prototype.$ = jQuerry;
