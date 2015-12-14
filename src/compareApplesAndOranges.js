var compareApplesAndOranges = function(o1,o2) {
	var isComparingApplesAndOranges = false,
		o1type = typeof(o1),
		o2type = typeof(o2);
			
	if(o1type == 'undefined' || o2type == 'undefined' || o1 == '' || o2 == '') {
		return 'You are not even trying to compare apples and oranges.';
	}
	else if (o1type != o2type) {
		return 'You may be comparing apples and oranges.'
	} else {
		if(o1type == 'string' && o2type == 'string') {
			o1 = o1.trim().toLowerCase();
			o2 = o2.trim().toLowerCase();
			if(((o1 == 'apples' || o2 == 'apples') && (o1 == 'oranges' || o2 == 'oranges')) && o1 != o2) {
				isComparingApplesAndOranges = true;
			}
		}
	}
	
	return isComparingApplesAndOranges ? 'You are, in fact, comparing apples and oranges!' : 'You are not comparing apples and oranges.';
}

anything.prototype.compareApplesAndOranges = compareApplesAndOranges;