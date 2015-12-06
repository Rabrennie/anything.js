var hashtagify = function (text, rate) {
  rate = rate || 0.25;
  var parts = (text || '').split(/\s+/).map(function(word){
    if (Math.random() < rate && text.indexOf('#') === -1) {
      word = '#' + word;
    }
    return word;
  });
  return parts.join(' ');
};

anything.prototype.hashtagify = hashtagify;
