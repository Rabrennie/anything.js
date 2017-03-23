var getTomorrow = function () {
 sleep(1000*86400);
 return today.getDate();
};

anything.prototype.getTomorrowDate = getTomorrow;
