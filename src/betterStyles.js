/**
 * @desc Loads latest Δ.css into current page
 * @author TheBITLINK aka BIT <me@thebitlink.com>
 */
var betterStyles = function(){
    var link  = document.createElement('link');
    link.href = 'https://cdn.rawgit.com/Rabrennie/anything.css/master/dist/anything.css';
    link.type = 'text/css';
    link.rel  = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
}

anything.prototype.betterStyles = betterStyles;
