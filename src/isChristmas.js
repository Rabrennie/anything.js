//Return true if today is Christmas
var isChristmas = function () {
    var today = new (Date);
    // Months are 0 indexed
    return (today.getMonth() == 11 && today.getDate() == 25);
};

anything.prototype.isChristmas = isChristmas;