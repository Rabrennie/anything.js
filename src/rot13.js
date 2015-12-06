var rot13 = function (str) {
    var str_rot13 = "";
    var codeA = "A".charCodeAt(0);
    var codeZ = "Z".charCodeAt(0);
    var codea = "a".charCodeAt(0);
    var codez = "z".charCodeAt(0);
    for(var i = 0; i < str.length; i++) {
        c = str.charCodeAt(i);
        if( c >= codeA && c <= codeZ ) {
            c = codeA + ( ( c - codeA + 13 ) % 26 );
        } else if( c >= codea && c <= codez ) {
            c = codea + ( ( c - codea + 13 ) % 26 );
        }
        str_rot13 += String.fromCharCode(c);
    }
    return str_rot13;
}

anything.prototype.rot13 = rot13;
