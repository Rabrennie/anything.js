    /**
    * Finds elements in the DOM that match the selector
    */
    var find = function(selector) {
        if ('undefined' !== typeof document.querySelector) {
            this.queryResult = document.querySelector(selector);
            return this;
        }
        
        return undefined;
    };
    
    
    anything.prototype.find = find;
    