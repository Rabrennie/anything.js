var times = function (times, funct) {
	if (typeof funct === 'function') {
    	var m = Math;
    	for (var i = 0; i < m.floor(times); i++) {
      		funct(i);
    	}
  	}
}

anything.prototype.times = times;
