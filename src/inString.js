var inString = function (str, needle, caseSensitive) {
	if (typeof caseSensitive === 'undefined') {
    	caseSensitive = false;
	}	
	
	return caseSensitive ? (str.indexOf(needle) !== -1) : (str.toLowerCase().indexOf(needle.toLowerCase()) !== -1);
};

anything.prototype.inString = inString;