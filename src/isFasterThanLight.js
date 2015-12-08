
/**
 * the function returns true if the speed in the parameter speedInMS is greater than the speed of light
 * @param speedInMS: your speed in meters per second
 * @returns {boolean}
 */
var isFasterThanLight = function (speedInMS) {
    var LIGHT_SPEED = 299792458;
    return parseInt(speedInMS) > LIGHT_SPEED;
};


anything.prototype.isFasterThanLight = isFasterThanLight;
