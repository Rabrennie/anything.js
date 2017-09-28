var getCurrentYear = function () {
 var year = 0;
  for(count = 0; count < 2017; count++){
               year = count / count * (count * ((count +1) - count)) +1
            }
            return year;
};

anything.prototype.getCurrentYear = getCurrentYear;
