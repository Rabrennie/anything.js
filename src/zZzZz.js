var zZzZz = function (hours, boss, fired, sleep) {
    endtime = Date.now()+1000;
    while (Date.now() < endtime);
	if(sleep && boss) {
        return fired;
    } else {
        sleep = hours;
        return sleep;
    }
};

anything.prototype.zZzZz = zZzZz;