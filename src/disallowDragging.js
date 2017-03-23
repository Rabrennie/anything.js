var disallowDragging = function () {
    document.ondragstart = function(){ return false; };
 };
 
 anything.prototype.disallowDragging = disallowDragging;
