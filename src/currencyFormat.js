var currencyFormat = function currencyFormat(text, thousands_separator, fraction_count, fraction_separator, symbol, symbol_position, symbol_spacing){
	if(thousands_separator==""){
	    thousands_separator = ",";
	}
	if(fraction_count==""){
		fraction_count = 0;
	}
	if(fraction_separator==""){
		fraction_separator = ".";
	}
	if(symbol_position==""){
		symbol_position = "front";
	}
	if(symbol_spacing==null || symbol_spacing==""){
		symbol_spacing = true;
	}
    var result = 0.0;
    var after_dot, before_dot, pattern, _ref;

    var amount = parseFloat(text);
    if (!isNaN(amount)) {
        result = amount;
    }

    result = result.toFixed(fraction_count);
    _ref = result.split(".");
    before_dot = _ref[0];
    after_dot = _ref[1];
    pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(before_dot)) {
        before_dot = before_dot.replace(pattern, "$1" + thousands_separator + "$2");
    }
    if (fraction_count > 0) {
        result = [before_dot, after_dot].join(fraction_separator);
    } else {
        result = before_dot;
    }

    var string;
    string = [result];
    string.splice((symbol_position === "front" ? 0 : 1), 0, symbol);
    result = string.join(symbol_spacing ? " " : "");

    return result;	
}

anything.prototype.currencyFormat = currencyFormat;

