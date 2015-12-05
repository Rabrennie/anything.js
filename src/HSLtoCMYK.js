var HSLtoCMYK = function (hsl) {
    var rgb = HSLtoRGB(hsl);
    return RGBtoCMYK(rgb);
};


anything.prototype.HSLtoCMYK = HSLtoCMYK;