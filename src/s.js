// jquery-like simple dom wrapper.
var s = {
    get: function(selector) {
        if (typeof selector !== "string" || selector.length < 2)
            return false;
        switch (selector[0]) {
            // Class selector
            case ".":
                return document.getElementsByClassName(selector.substr(1));
                break;
            case "#":
                return document.getElementById(selector.substr(1));
                break;
            default:
                return document.getElementsByTagName(selector);
                break;
        }
    },
    iterate: function (coll, action) {
        for (var i = 0; i < coll.length; i++) {
            action(coll[i]);
        }
    },
    setAll: function (name, val) {
        var takeAction = function(el) {
            el.innerHTML = val;
        };
        var r = s.get(name);
        if (r instanceof HTMLCollection) {
            s.iterate(r, takeAction);
        } else {
            takeAction(r);
        }
    }
};

anything.prototype.s = s;
