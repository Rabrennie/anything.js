var toUasi = function (s) {
    var uasi = [['a', 'e'],['e', 'i'],['i', 'o'],['o', 'u'],['u', 'a']];
    return String(s).split('').reduce(function(prev, curr) {
        var repl = undefined;
        for(var i=0; i < uasi.length; i += 1) {
            if(uasi[i][0].toLowerCase() === curr) {
                repl = uasi[i][1].toLowerCase();
                return prev + repl;
            }
            if(uasi[i][0].toUpperCase() === curr) {
                repl = uasi[i][1].toUpperCase();
                return prev + repl;
            }
        }
        return prev + curr;
    }, "")
};

anything.prototype.toUasi = toUasi;
