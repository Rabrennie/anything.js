var isjQueryLoaded = function () {
	return (typeof jQuery == 'undefined') ? false : true;
}

anything.prototype.isjQueryLoaded = isjQueryLoaded;
