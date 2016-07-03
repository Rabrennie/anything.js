var isTrue = function (bool) {
   return bool;
};
var isFalse = function(bool){
    return !bool;
}
anything.prototype.isTrue = isTrue;
anything.prototype.isFalse = isFalse;
