
var disallowSelection = function () {
   document.ondragstart = function(){ return false; };
};


anything.prototype.disallowSelection = disallowSelection;
