var RAINBOW = function(element, speed){
  element = (typeof element == 'undefined') ? document.body: element;
  speed = (typeof speed == 'undefined') ? 5: speed;
  var i = 0;
  return setInterval(function(){element.style.background='hsl('+i+',100%, 50%)';i=(i <= 359)?i+1:0;}, speed)
}

anything.prototype.RAINBOW = RAINBOW;
