var classlist = function (el) {
    this.addClass = function(className) {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    };

    this.removeClass = function(className) {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };

    this.hasClass = function(className) {
        if (el.classList)
            return el.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    };
};

anything.prototype.classlist = classlist;
