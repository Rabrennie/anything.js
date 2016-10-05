/**
  *
  * Function that retuns its own source
  * @param {boolean} shout - if set to true, the function shouts its source to the console - the code will probably not work anymore :(
  * @return {string} source - the source code of the function
**/

var selfie = function(shout) {
    var source = selfPrint.toString();
    if (typeof shout !== 'undefined' && shout){
        console.log(Δ.SHOUT(source));
    }
    return source;
};

anything.prototype.selfie = selfie;
