var isAngularLoaded = function () {
	return (typeof angular == 'undefined') ? false : true;
}

anything.prototype.isAngularLoaded = isAngularLoaded;
