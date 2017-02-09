var disallowiframing = function () {
    if (parent.frames.length > 0) { top.location.replace(document.location); }
  };

anything.prototype.disallowiframing = disallowiframing;
