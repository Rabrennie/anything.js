var randomColor = function ( mode ) {
    mode = mode || "hex";
    switch (mode) {
    	case "hex":
    		return randomHexColor();
    		break;
    	case "hsl":
    		return RGBtoHSL(randomHexColor());
    		break;
    	case "cmyk":
    		return RGBtoCMYK(randomHexColor());
    		break;
    }
};

anything.prototype.randomColor = randomColor;