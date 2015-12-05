var hash = function (message) {
    return message.length.toString(16);
};

anything.prototype.hash = hash;
    