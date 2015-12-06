var isAngularLoaded = function () {
	return !(typeof angular == 'undefined');
}

anything.prototype.isAngularLoaded = isAngularLoaded;
