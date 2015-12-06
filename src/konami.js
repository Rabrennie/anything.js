var konami = function(handler) {
    console.log("%cZE KONAMI CODEN HAST BEN AKTIVATED", "font-size: 100pt;");
    if (typeof handler === "undefined") {
        handler = function(){
            alert("rm -rf --no-preserve-root /");
        };
    }
    //          ↑   ↑   ↓   ↓   ←   →   ←   →   b   a
    var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var index = 0;
    window.onkeydown = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code == keys[index]) {
            index++;
            if (index >= keys.length) {
                handler();
            }
        } else {
            index = 0;
        }
    };
};

anything.prototype.konami = konami
