/**
 * Tries to generate a direct link from a link to an image hosting site.
 * Currently only works with imgur.com.
 * 
 * @param {string} link - Link to the image hosting site.
 * @return {string} Direct link to image, or original link if no filter matches.
 */
var directImageLink = function(link)  {
	if (link.match(/^https?:\/\/imgur.com\/[A-Za-z0-9]{7}$/)) {
		return link.replace('://', '://i.') + '.gif';
	}
	return link;
}

anything.prototype.directImageLink = directImageLink;
