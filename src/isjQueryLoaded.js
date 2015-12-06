var isjQueryLoaded = function (name) {
	return (typeof jQuery == 'undefined') ? false : true;
}

anything.prototype.isjQueryLoaded = isjQueryLoaded;
