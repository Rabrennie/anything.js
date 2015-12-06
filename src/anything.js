var anyFunction = function () {
    var funcs = [];
    for (var prop in Δ) {
        if (prop !== 'anything') {
            funcs.push(prop);
        }
    }
    var randomFunc = Math.floor((Math.random() * funcs.length));
    try {
        return Δ[funcs[randomFunc]].apply(this, arguments);
    } catch (e) {
        return e;
    }
}

anything.prototype.anything = anyFunction;
