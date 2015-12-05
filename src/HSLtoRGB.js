var HSLtoRGB = function (hsl) {
    if (hsl.s == 0) {
        var grey = (hsl.l / 100) * 255;
        return {
            r: grey,
            g: grey,
            b: grey
        };
    } else {
        if (hsl.l >= 50) {
            tempOne = ((hsl.l / 100) + (hsl.s / 100)) - ((hsl.l / 100) * (hsl.s / 100));
        } else {
            tempOne = (hsl.l / 100) * (1 + (hsl.s / 100));
        }
        tempTwo = (2 * (hsl.l / 100)) - tempOne;
        tempHue = hsl.h / 360;
        tempR = (tempHue + 0.333) % 1;
        tempG = tempHue;
        tempB = negMod((tempHue - 0.333), 1);
        var r, g, b;
        if ((6 * tempR) < 1) {
            r = tempTwo + ((tempOne - tempTwo) * 6 * tempR);
        } else if ((2 * tempR) < 1) {
            r = tempOne;
        } else if ((3 * tempR) < 2) {
            r = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempR) * 6));
        } else {
            r = tempTwo;
        }
        if ((6 * tempG) < 1) {
            g = tempTwo + ((tempOne - tempTwo) * 6 * tempG);
        } else if ((2 * tempG) < 1) {
            g = tempOne;
        } else if ((3 * tempG) < 2) {
            g = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempG) * 6));
        } else {
            g = tempTwo;
        }
        if ((6 * tempB) < 1) {
            b = tempTwo + ((tempOne - tempTwo) * 6 * tempB);
        } else if ((2 * tempB) < 1) {
            b = tempOne;
        } else if ((3 * tempB) < 2) {
            b = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempB) * 6));
        } else {
            b = tempTwo;
        }
        if (r < 0) r = 0;
        if (g < 0) g = 0;
        if (b < 0) b = 0;
        var rgb = { r: r * 255, g: g * 255, b: b * 255, hex: null };
        rgb.hex = RGBtoHEX(rgb);
        return rgb;
    }
};

anything.prototype.HSLtoRGB = HSLtoRGB;