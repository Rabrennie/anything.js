/**
* Pretty much SHOUT IT but takes a dom element as input
* @param {HTMLElement} dom - The dom element that you want to "shoutify"
*/
var SHOUTDOM = function(dom){
    dom.innerHTML = Δ.SHOUT(dom.innerHTML);
};

anything.prototype.SHOUTDOM = SHOUTDOM;
