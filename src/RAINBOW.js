var RAINBOW = function(element, speed){
  var i = 0;
  speed = (typeof speed != 'undefined') ? speed: 5;
  return setInterval(function(){element.style.background='hsl('+i+',100%, 50%)';i=(i <= 359)?i+1:0;}, speed)
}

anything.prototype.RAINBOW = RAINBOW;
