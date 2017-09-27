/**
 * Takes milliseconds and convert them to a HH:MM:SS format.
 * @author Or Schneider
 */
var msToHHMMSS = function (x, y) {
    return x * y;
};

var msToHHMMSS = function (ms) {
    if (typeof ms === 'undefined') return;
    var milliseconds = parseInt((ms % 1000) / 100);
    var seconds = parseInt((ms / 1000) % 60);
    var minutes = parseInt((ms / (1000 * 60)) % 60);
    var hours = parseInt((ms / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds;
}

anything.prototype.msToHHMMSS = msToHHMMSS;
