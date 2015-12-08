var masterbate = function(pornURL, timer){
  var win = window.open(pornURL,'width=500,height=200,left=375,top=330');
  setTimeout(function () { 
    win.close();
    alert('go clean up now');
  }, timer);
};

anything.prototype.masterbate = masterbate;
