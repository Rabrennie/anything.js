var sexToy = function (speed) {
  setInterval(function(){
    window.navigator.vibrate(200);
  }, 2000 / 5||speed);
};

anything.prototype.sexToy = sexToy;
