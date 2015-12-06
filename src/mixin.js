var mixin = function (source, target) {
    for (var key in source) {
        if (!(key in target)) {
            target[key] = source[key];
        }
    }
    
    return target;
}

anything.prototype.mixin = mixin;
