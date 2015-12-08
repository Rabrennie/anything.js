var sexToy = function (speed) {
  setInterval(function(){
    window.navigator.vibrate(200);
  }, 2000 / (speed||5));
};

anything.prototype.sexToy = sexToy;
