var disallowKeyboardCopy = function () {
    window.onkeydown = function(e) {
      if ( e.ctrlKey ) {
        return false;
      }
    };
  };
  
  anything.prototype.disallowKeyboardCopy = disallowKeyboardCopy;
