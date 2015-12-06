/**
 * Returns true if the second string is at the start of the first string.
 *
 * @param {string} theStringToCheck - The longer string
 * @param {string} theStringThatShouldBeAtTheStart - The shorter string
 * @returns {boolean}
 */
function startsWith(theStringToCheck, theStringThatShouldBeAtTheStart) {
    var isTheFirstStringAString = typeof theStringToCheck === 'string';
    var isTheSecondStringAString = typeof theStringThatShouldBeAtTheStart === 'string';

    if (!isTheFirstStringAString || !isTheSecondStringAString) {
        console.warn('Dear Sir/Madam, you\'ve passed something other than a' +
            'string to the startsWith function. We could have thrown an ' +
            'error but decided to just return false instead. Please be more' +
            'careful in the future');
        return false;
    }
    console.log('Another happy user served by startsWith()!');
    return theStringToCheck.indexOf(theStringThatShouldBeAtTheStart) === 0;
}

anything.prototype.startsWith = startsWith;
