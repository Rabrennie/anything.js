var catify = function(){
		var imgs = document.getElementsByTagName("img");
		for (var i = 0; i < imgs.length; i++) {
				var img = imgs[i];
				img.src="http://baconmockup.com/"+img.clientWidth+"/"+img.clientHeight;
		}
}

anything.prototype.catify = catify;
