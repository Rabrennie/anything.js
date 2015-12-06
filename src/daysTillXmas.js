var daysTillXmas = function () {
    var today = new Date();
    var xmas = new Date(today.getFullYear(), 11, 25, 0, 0, 0, 0);
    if (today > xmas) {
        xmas.setYear(today.getFullYear() + 1)
    }

    var utcXmas = Date.UTC(xmas.getFullYear(), xmas.getMonth(), xmas.getDate());
    var utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

    return Math.floor((utcXmas - utcToday) / (1000 * 60 * 60 * 24));
};

anything.prototype.daysTillXmas = daysTillXmas;
