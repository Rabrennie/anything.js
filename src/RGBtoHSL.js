var RGBtoHSL = function (rgb) {
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
    var rgbOrdered = [r, g, b].sort();
    var l = ((rgbOrdered[0] + rgbOrdered[2]) / 2) * 100;
    var s, h;
    if (rgbOrdered[0] == rgbOrdered[2]) {
        s = 0;
        h = 0;
    } else {
        if (l >= 50) {
            s = ((rgbOrdered[2] - rgbOrdered[0]) / ((2.0 - rgbOrdered[2]) - rgbOrdered[0])) * 100;
        } else {
            s = ((rgbOrdered[2] - rgbOrdered[0]) / (rgbOrdered[2] + rgbOrdered[0])) * 100;
        }
        if (rgbOrdered[2] == r) {
            h = ((g - b) / (rgbOrdered[2] - rgbOrdered[0])) * 60;
        } else if (rgbOrdered[2] == g) {
            h = (2 + ((b - r) / (rgbOrdered[2] - rgbOrdered[0]))) * 60;
        } else {
            h = (4 + ((r - g) / (rgbOrdered[2] - rgbOrdered[0]))) * 60;
        }
        if (h < 0) {
            h += 360;
        } else if (h > 360) {
            h = h % 360;
        }
    };
    return {
        h: h,
        s: s,
        l: l
    };
};

anything.prototype.RGBtoHSL = RGBtoHSL;