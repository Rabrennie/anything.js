var RGBtoHEX = function (rgb) {
    rgb.r = Math.floor(rgb.r);
    rgb.g = Math.floor(rgb.g);
    rgb.b = Math.floor(rgb.b);
    var hex = "#" +
        ((rgb.r < 16 ? "0" : "") + rgb.r.toString(16)) +
        ((rgb.g < 16 ? "0" : "") + rgb.g.toString(16)) +
        ((rgb.b < 16 ? "0" : "") + rgb.b.toString(16));
    return hex;
}

anything.prototype.RGBtoHEX = RGBtoHEX;