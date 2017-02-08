var disableRightClick = function () {
    document.oncontextmenu = function(){ return false; };
  };

anything.prototype.disableRightClick = disableRightClick;
