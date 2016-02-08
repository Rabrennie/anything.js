var isDataURL = function(str) {
    if ('string' !== typeof str) return false;
	var isDataURLRegex = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
	return !!str.match(isDataURLRegex);
};

anything.prototype.isDataURL = isDataURL;
