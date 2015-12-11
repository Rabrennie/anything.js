var interjection = function(guhnoo) {
	var stallman = guhnoo;
	stallman = stallman.replace(' Linux', ' GNU/Linux');
	stallman = stallman.replace('	Linux', '	GNU/Linux');
	stallman = stallman.replace('\nLinux', '\nGNU/Linux');

	return stallman;
}

anything.prototype.interjection = interjection;
