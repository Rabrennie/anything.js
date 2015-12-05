var async_doThingTomorrow = function (cb) {
    var now = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    setTimeout(function () {
        cb(new Date());
    }, tomorrow - now);
};

anything.prototype.async_doThingTomorrow = async_doThingTomorrow;