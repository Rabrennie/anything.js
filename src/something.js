Object.defineProperty(anything, 'something', {
    get: function () {
        var keys = Object.keys(window);
        return window[keys[Math.floor(Math.random() * keys.length)]];
    }
});
