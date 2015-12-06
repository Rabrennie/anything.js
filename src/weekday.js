var weekday = function(){
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
};

anything.prototype.weekday = weekday;
