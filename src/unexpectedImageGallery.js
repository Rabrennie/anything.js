/**
 * Removes the unexpectedImageGalley from the html.
 */
var removeUnexpectedImageGallery = function() {
	
	document.body.removeChild(document.getElementById('unexpectedImageGallery'));
}

/**
 * Shows the unexpecting user an image gallery containing some images.
 * 
 * @param {Array} imageLinks - Urls of the images the user should be surprised with.
 * @param {number} startIndex - Index of the first image the user shoud see.
 */
var createUnexpectedImageGallery = function(imageLinks, startIndex) {
	if (document.getElementById('unexpectedImageGallery')) removeUnexpectedImageGallery();
	if (!imageLinks || !imageLinks.length) {
		console.log('Cannot create unexpected image gallery whithout images!');
		return;
	}
	var images = [];
	var current = startIndex || 0;
	imageLinks.forEach(function(imageLink) {
		var directLink = Δ.directImageLink(imageLink);
		var preloadImage = new Image();
		preloadImage.src = directLink;
		images.push(directLink);
	});
	var prevImage = function() { current = current < images.length - 1 ? current + 1 : 0; updateImage(); };
	var nextImage = function() { current = current > 0 ? current - 1 : images.length - 1; updateImage(); };
	var keydownFunction = function(event) {
		if (event.keyCode >= 37 && event.keyCode <= 40) {
			if (event.keyCode == 37) prevImage();
			else if (event.keyCode == 39) nextImage();
			event.cancelBubble = true;
			event.returnValue = false;
		}
		return event.returnValue;
	};
	var mainFrame = document.createElement('div');
	mainFrame.id = 'unexpectedImageGallery';
	mainFrame.setAttribute('style', '-moz-user-select: none');
	var background = document.createElement('div');
	background.setAttribute('style','position:fixed;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(127,127,127,.8);text-align:center;');
	background.onclick = removeUnexpectedImageGallery;
	mainFrame.appendChild(background);
	var leftSide = document.createElement('div');
	leftSide.setAttribute('style','position:fixed;top:0;left:0;width:100px;height:100%;z-index:999;background-color:rgba(0,0,0,.5);');
	leftSide.onclick = prevImage;
	mainFrame.appendChild(leftSide);
	var rightSide = document.createElement('div');
	rightSide.setAttribute('style','position:fixed;top:0;right:0;width:100px;height:100%;z-index:999;background-color:rgba(0,0,0,.5);');
	rightSide.onclick = nextImage;
	mainFrame.appendChild(rightSide);
	var image = new Image();
	image.setAttribute('style','max-height:100%;max-width:100%;');
	background.appendChild(image);
	var updateImage = function() {
		image.src = images[current];
	}
	updateImage();
	document.onkeydown = keydownFunction;
	document.body.appendChild(mainFrame)
}

anything.prototype.removeUnexpectedImageGallery = removeUnexpectedImageGallery;
anything.prototype.createUnexpectedImageGallery = createUnexpectedImageGallery;
