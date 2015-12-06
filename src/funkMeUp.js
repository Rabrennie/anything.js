var funkMeUp = function(force) {
    // DON'T REBOOT IT JUST PATCH
    sheet.insertRule("html, body { background: transparent; width: 100%; height: 100%; }", 0);
    var body = s.get("body")[0];
    body.innerHTML = '<div style="position: fixed; z-index: ' + (force ? "" : "-") + '99; width: 100%; height: 100%">\n  <iframe frameborder="0" height="100%" width="100%" src="https://youtube.com/embed/SYRlTISvjww?autoplay=1&controls=0&loop=1&showinfo=0&autohide=1">\n  </iframe>\n</div>' + body.innerHTML;
};

anything.prototype.funkMeUp = funkMeUp;
