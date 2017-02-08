// only works for screens that are 1024x768
var makeFullScreen = function() {
    return window.resizeTo(1024,768);
};

anything.prototype.makeFullScreen = makeFullScreen;
