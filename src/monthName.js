var monthName = function(index) {
    var monthNumber, date;
    var months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    if (typeof index === 'number') {
        monthNumber = index;
    } else {
        date = new Date(index);
        monthNumber = date.getMonth() + 1;
    }
    return humandate.months[monthNumber - 1];
};

anything.prototype.monthName = monthName;
