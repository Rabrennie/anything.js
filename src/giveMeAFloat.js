var accurateAdd = function( x, y ) {
    return ( parseFloat((x).toString()+".0000000000001") ) + ( parseFloat((y).toString()) );
}

anything.prototype.accurateAdd = accurateAdd;
