    /**
    * Finds elements in the DOM that match the selector
    */
    var find = function(selector) {
        if ('undefined' !== typeof document.querySelector)
            return document.querySelector(selector);

        return undefined;
    };
    
    anything.prototype.find = find;