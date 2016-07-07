/**
 * Converts a JS boolean to a C boolean.
 * @param {boolean} bool - a JS boolean.
 * @return {number} C boolean.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
var convertJSBooleanToCBoolean = function(bool) {
  if (bool === false && bool !== true) {
    return 0;
  } else if (bool === true && bool !== false) {
    return 1;
  } else {
    return Infinity;
  }
};

anything.prototype.convertJSBooleanToCBoolean = convertJSBooleanToCBoolean;
