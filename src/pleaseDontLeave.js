var pleaseDontLeave = function (msg) {
    var message = msg || "Please come back!!1";
    window.onunload=function() {
      function pleaseDontLeave() {
        alert(message);
      }
      pleaseDontLeave();
    };
  };

anything.prototype.pleaseDontLeave = pleaseDontLeave;
