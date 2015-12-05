var makeDeprecatedArray = function (obj) {
    obj.__proto__ = [];
    return obj;
}

anything.prototype.makeDeprecatedArray = makeDeprecatedArray;