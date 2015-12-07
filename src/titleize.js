/**
 * Turn any string into a pretty title
 * @method Δ.titleize
 * @author Ramon Gebben <ramon@ra-ge.net>
 * @param  {String} str String to titleize
 * @return {String}     Titleized version of the String
 */
anything.prototype.titleize = function(str) {
    function capitalize(str) { return str.substr( 0, 1 ).toUpperCase() + str.substr(1); };
	return str.split(/[.?*+^$[\]\\(){}_\s|-]/g).map(function(c) { return capitalize(str); }).join(' ');
};
