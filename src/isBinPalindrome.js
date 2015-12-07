
var isBinPalindrome = function(num){
  if('string' == typeof num){
    num = parseInt(number, 10);
  }
  var length = num.toString(2).length;
  var halfLen = Math.floor(length/2);

  //Convert the top half to a string, ignoring the middle bit if it's length is odd.
  var topString = (num >> (halfLen + length % 2)).toString(2);
  //Reverse the top half. Ex: 100 -> 001 or 1
  var reverseTop = 0;
  for(var bit = topString.length-1; bit >= 0; bit--){
    if(topString[bit] == "1"){
      reverseTop += 1;
    }
    if(bit != 0){
      reverseTop <<= 1;
    }
  }

  //Generate a bit string of all 1's to separate out the bottom part of the number
  var mask = 1;
  for(var i = 1; i < halfLen; i++){
    mask <<= 1;
    mask += 1;
  }
  var bottomHalf = num & mask;

  return reverseTop == bottomHalf;
}

anything.prototype.isBinPalindrome = isBinPalindrome;
