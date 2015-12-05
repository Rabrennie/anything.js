var CMYKtoHSL = function (cmyk) {
    var rgb = CMYKtoRGB(cmyk);
    return RGBtoHSL(rgb);
};

anything.prototype.CMYKtoHSL = CMYKtoHSL;