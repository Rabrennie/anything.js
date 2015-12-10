/**
 * Hide what you're looking at and go to google.com.
 * Useful when parents are around.
 * 
 * @param {string} query - Something you'd like to search for, maybe
 */
var google = function(query) {
    document.body.style.visibility = 'hidden';
    window.location.href = 'http://www.google.com/#q=' + query;
}

anything.prototype.google = google;
