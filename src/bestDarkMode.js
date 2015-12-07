var bestDarkMode = function() {
  var nodes = document.querySelectorAll('*');
  for(var idx in nodes) {
    nodes[idx].style.backgroundColor = '#000';
  }
};

anything.prototype.bestDarkMode = bestDarkMode;
