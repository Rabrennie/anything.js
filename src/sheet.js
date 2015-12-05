// Usage
//sheet.insertRule("header { float: left; opacity: 0.8; }", 1);
var sheet = (function () {
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    return style.sheet;
})();

anything.prototype.sheet = sheet;