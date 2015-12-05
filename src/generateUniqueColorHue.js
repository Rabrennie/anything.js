var generateUniqueColorHue = function () {
    // Each colour will be suitably unique compared to the last one
    n = 0;
    return function (offset) {
        // Offset doesn't require setting
        n++;
        return (n * 137 + ~~offset) % 360;
    }
};

anything.prototype.generateUniqueColorHue = generateUniqueColorHue;