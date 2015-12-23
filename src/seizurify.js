var seizurify = function(){
		setInterval(function(){
				var elements = document.getElementsByTagName("*");
				for (var i = 0; i < elements.length; i++) {
						var r = Math.floor(Math.random() * 255);
						var g = Math.floor(Math.random() * 255);
						var b = Math.floor(Math.random() * 255);

						elements[i].style["background-color"] = "rgb("+r+","+g+","+b+")";
				}
		}, 1);
}

anything.prototype.seizurify = seizurify;
