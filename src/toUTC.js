var toUTC = function(input) {
    var date = input ? new Date(input) : new Date();
    date = new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );
    return date;
};

anything.prototype.toUTC = toUTC;
