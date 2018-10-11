var void = function(doIt = false) {
  console.log('You have now entered the void.');
  
  if(doIt) {
    console.log('The void now punishes you for your mischevious actions');
    process.exit(1337);
  }
};

anything.prototype.void = void;
