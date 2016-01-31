/**
 * 
 */

var Option = function(x) {
    if(None !== undefined && (x === null || x === undefined))
        return None;
    this.self = x;
    this.isEmpty = false;
}

var None = new Option(undefined);
None.isEmpty = true;
None.get = function() { throw new Error('unwrapping None!'); }
None.toString = function() { return 'None'; }

Option.prototype.get = function() {
    return this.self;
}

Option.prototype.map = function(f) {
    if(this.isEmpty)
        return None;
    else
        return new Option(f(this.get()));
}

Option.prototype.filter = function(p) {
    if(this.isEmpty || !p(this.get()))
        return None;
    else
        return this;
}

Option.prototype.forEach = function(f) {
    if(!this.isEmpty)
        f(this.get());
}

Option.prototype.getOrElse = function(f) {
    if(!this.isEmpty)
        return this.get();
    else
        return f();
}

Option.prototype.toString = function() {
    return 'Some(' + this.get() + ')';
}

anything.prototype.Option = Option;
anything.prototype.None = None;

