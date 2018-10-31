/**
 * Returns how many ms it took to run function.
 * Optional arguments can be passed right after function.
 * @author CookieMichal
 */

var perf = function(func) {
    if (typeof func !== "function") return -1;
    var args = Array.prototype.slice.call(arguments, 1);
    var t0 = performance.now();
    func.apply(this, args);
    var t1 = performance.now();
    return t1 - t0;
}

anything.prototype.perf = perf;
