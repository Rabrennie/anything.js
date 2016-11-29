var stringCapitalize = function stringCapitalize(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

anything.prototype.stringCapitalize = stringCapitalize;