var efficientSort = function(o) {
    var sorted = false;
    while(sorted == false){
        o = shuffle(o);
        sorted = isSorted(o);
    }
    return o;
}

var isSorted = function(v){
    for(var i=1; i<v.length; i++) {
        if (v[i-1] > v[i]) { return false; }
    }
    return true;
}

var shuffle = function(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

anything.prototype.efficientSort = efficientSort;
