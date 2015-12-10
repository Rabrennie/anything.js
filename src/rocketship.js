//Returns a rocketship with a specified length
var rocketship = function(length){
    var rocketship = "8";
    for(var i = 0; i < length; i++){
        rocketship += "=";
    }
    return rocketship + ">";
}
