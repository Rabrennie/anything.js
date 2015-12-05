/**
 * Tuple "class".
 */
var tuple = function() {
    /**
     * Creates a tuple (as an object) from passed arguments.
     * In typical tuple fashion, these object properties are
     * immutable.
     * 
     * @param {...*} element - Tuple element(s) of any type
     */
    function create(element) {
        var obj = {};

        for (var i = 0, l = arguments.length; i < l; i++) {
            Object.defineProperty(obj, i+'', { value : arguments[i], enumerable : true });
        }

        return obj;
    }

    /**
     * Returns an array filled with tuple elements.
     * 
     * @param {Object} tuple - Tuple to get elements of.
     */
    function members(tuple) {
        var arr = [];
        for (t in tuple) {
            arr.push(tuple[t]);
        }

        return arr;
    }

    return {
        create : create,
        members : members
    };
};

anything.prototype.tuple = tuple;