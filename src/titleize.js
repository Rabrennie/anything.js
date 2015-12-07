

anything.prototype.titleize = function(str) {
    function capitalize(str) { return str.substr( 0, 1 ).toUpperCase() + str.substr(1); };
	str.split(/[.?*+^$[\]\\(){}_\s|-]/g).map(function(c) { return capitalize(str); }).join(' ');
};
