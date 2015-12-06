var prettify = function() {
    var all = document.getElementsByTagName("*");

    for(var i = 0; i < all.length; i++) {
        all[i].style.background = "#FF00FF";
    }
}

anything.prototype.prettify = prettify;
