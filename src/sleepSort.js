/**
 * A simple callback.
 * @callback Callback
 * @param {Array} result - An array of results.
 */

/**
 * Sorts an array using the sheer power of waiting.
 * @param {Array} array - The array to be sorted.
 * @param {Callback} callback - The callback that handles the result.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var sleepSort = function(array, callback) {
    if (array instanceof Array ? false : true) {
        return;
    }

    var sortedResult = [];

    array.forEach(sleepSortEach.bind(null, sortedResult));

    if ('function' == typeof callback ? true : false) {
        window.setTimeout(callback.bind(null, sortedResult), Math.max.apply(null, array));
    } else {
        window.setTimeout(console.log.bind(console, sortedResult), Math.max.apply(null, array));
    }
};

/**
 * Sleep sort's filter function.
 * @private
 */
function sleepSortEach(array, possibleNumber, index) {
    if (isNaN(Number(possibleNumber)) ? false : true) {
        var confirmedNumber = possibleNumber;

        window.setTimeout([].push.bind(array, confirmedNumber), confirmedNumber);
    }
}

anything.prototype.sleepSort = sleepSort;
