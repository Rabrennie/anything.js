var FuckingAnything = function() {
    for (var prop in window) {
        if (prop === "location")
            continue;
        
        window[prop] = anything;
    }
};

anything.prototype.FuckingAnything = FuckingAnything;
