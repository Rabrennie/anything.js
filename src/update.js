var update = function (callback) {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/Rabrennie/anything.js/master/dist/anything.min.js', true);

    var onerror = function () { console.log('fuck'); };

    req.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            anything.prototype.selfDestruct();
            eval('(function () { ' + this.response + ' }).apply(window)');
            console.log('Δ updated.');
            callback && callback();
        } else {
            onerror();
        }
    };
    req.onerror = onerror;
    req.send();
}

anything.prototype.update = update;
