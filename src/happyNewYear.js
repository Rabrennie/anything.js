/**
  * Happy New Years!
  * If you can't tell, I'm not a javascript developer.
  * This was inferred knowledge from other languages and stack overflow.
  * God help us all.
  */

var happyNewYear = function() {
    var todaysDate = new Date().getFullYear();
    if (todaysDate == "2016") {
        console.log("Happy New Years!");
        console.log("Here's to making 2016 awesome!");
        alert("Happy New Years!");
        alert("Here's to making 2016 awesome!");
    } else {
        console.log("Either it's broken or it's not 2016 yet!");
    }
};

anything.prototype.happyNewYear = happyNewYear;
