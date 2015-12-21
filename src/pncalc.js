
/* a really dumb prefix notation calculator */
var pncalc = function(s){
    var calculate = function(t, start){
        switch (t[start]) {
            case "+":
                return calculate(t, start+1) + calculate(t, start+2);
                break;
            case "-":
                return calculate(t, start+1) - calculate(t, start+2);
                break;
            case "*":
                return calculate(t, start+1) * calculate(t, start+2);
                break;
            case "/":
                return calculate(t, start+1) / calculate(t, start+2);
                break;
            default:
                return Number(t[start]);
                break;
        }
    }
    var t = s.split(" ");
    return calculate(t, 0, t.length);
}

anything.prototype.pncalc = pncalc;
