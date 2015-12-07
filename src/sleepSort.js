var sortEach = function sortEach(array, possibleNumber, index) {
    if (isNaN(Number(possibleNumber)) ? false : true) {
        var confirmedNumber = possibleNumber;
        
        window.setTimeout([].push.bind(array, confirmedNumber), confirmedNumber);
    }
};

/**
 * This callback should deal with the result.
 * @callback resultCallback.
 * @param {Array} result - A sorted array.
 */

/**
 * Sorts an array using the sheer power of waiting.
 * @param {Array} array - The array to be sorted.
 * @param {resultCallback} callback - The callback that handles the result.
 */
var sleepSort = function sleepSort(array, callback) {
    if (array instanceof Array ? false : true) {
        return;
    }
    
    var sortedResult = [];
    
    array.forEach(sortEach.bind(null, sortedResult));
    
    if ('function' == typeof callback ? true : false) {
        window.setTimeout(callback.bind(null, sortedResult), Math.max.apply(null, array));
    } else {
        window.setTimeout(console.log.bind(console, sortedResult), Math.max.apply(null, array));
    }
};

anything.prototype.sleepSort = sleepSort;

