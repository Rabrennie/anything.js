/**
 * Mai Shuffle Algorithm
 *  > because Knuth-Fisher-Yates is too hard to pronounce
 *
 * Note: shuffles in place, so the original array gets modified.
 */
function MaiShuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

anything.prototype.shuffle = MaiShuffle;