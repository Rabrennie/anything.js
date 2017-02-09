var getLatestDataAsync = function(){
    setTimeout(
      function(){window.location = window.location;},
      10*60
    );
  };
  
  anything.prototype.getLatestDataAsync = getLatestDataAsync;
