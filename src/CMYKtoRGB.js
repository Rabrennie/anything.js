var CMYKtoRGB = function (cmyk) {
    var r = 255 * (1 - cmyk.c) * (1 - cmyk.k);
    var g = 255 * (1 - cmyk.m) * (1 - cmyk.k);
    var b = 255 * (1 - cmyk.y) * (1 - cmyk.k);
    var rgb = { r: r, g: g, b: b, hex: null };
    rgb.hex = RGBtoHEX(rgb);
    return rgb;
}

anything.prototype.CMYKtoRGB = CMYKtoRGB;