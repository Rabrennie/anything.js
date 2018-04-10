
var bottlesOfBeer = function bottlesOfBeer (numBottles) {  
  var bottles = numBottles;
  if (isNaN(bottles) || (bottles < 1)) {
    bottles = 99;
  }  
    
  while(bottles >= 0) {
    if ( bottles == 1 ) {
    console.log("One bottle of beer on the wall.");
    console.log("One bottle of beer.");
    }
    else {    
    console.log(bottles +" bottles of beer on the wall.");
    console.log(bottles +" bottles of beer.");
    }
    console.log("Take one down.");
    console.log("Pass it around.");
    bottles--;
    if ( bottles == 1 ) {
      console.log("One bottle of beer on the wall.");
      bottles = 99;
    }
    else {    
      console.log(bottles +" bottles of beer on the wall.");    
    }    
  }
};

anything.prototype.bottlesOfBeer = bottlesOfBeer;

