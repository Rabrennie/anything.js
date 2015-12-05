var RGBtoCMYK = function (rgb) {
    if ((typeof rgb) == "string" && rgb[0] == "#" && (rgb.length == 7 || rgb.length == 4)) {
        if (rgb.length == 4) {
            rgb = "#" + rgb[1] + rgb[1] + rgb[2] + rgb[2] + rgb[3] + rgb[3];
        }
        newrgb = { r: 0, g: 0, b: 0 };
        newrgb.r = parseInt(rgb.substring(1, 3), 16);
        newrgb.g = parseInt(rgb.substring(3, 5), 16);
        newrgb.b = parseInt(rgb.substring(5, 8), 16);
        rgb = newrgb;
    }
    var r = rgb['r'] / 255;
    var g = rgb['g'] / 255;
    var b = rgb['b'] / 255;
    var k = 1 - (Math.max(r, g, b));
    if (k != 1) {
        var c = ((1 - r) - k) / (1 - k);
        var m = ((1 - g) - k) / (1 - k);
        var y = ((1 - b) - k) / (1 - k);
    } else {
        var c = 0;
        var m = 0;
        var y = 0;
    }
    return { c: c, m: m, y: y, k: k };
};

anything.prototype.RGBtoCMYK = RGBtoCMYK;