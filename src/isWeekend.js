var isWeekend = function() {
  today = new Date();
  
  return today.getDay() == 0 || today.getDay() == 6;
}

anything.prototype.isWeekend = isWeekend;
