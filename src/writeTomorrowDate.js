var writeTomorrowDate = function () {
    async_doThingTomorrow(function (tomorrow) {
        document.write(tomorrow.toString());
    });
};

anything.prototype.writeTomorrowDate = writeTomorrowDate;