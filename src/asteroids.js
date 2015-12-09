/**
 * @desc Turn your browser into an asteroids game
 * @author Yehya Awad <yehyaawad.kip@gmail.com>
 */
var asteroids = function () {
    // asteroids/Kickassgame
    // Credit goes to http://kickassapp.com/ for the game code
    (function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://hi.kickassapp.com/kickass.js';
        document.body.appendChild(s);
    })();

    // destroy image
    var destroy = function () {
        var ad = document.querySelector("#kickass-hello-sunshine");
        if (ad != null) {
            ad.setAttribute("src", "");
            clearInterval(interv);
            //destroyed
        }
    }
    var interv = setInterval(destroy, 1000);
}

/**
 * @desc Exit asteroids game (you could also exit with ESC)
 * @author Yehya Awad <yehyaawad.kip@gmail.com>
 */
var asteroidsExit = function () {
    if (typeof window.KICKASSGAME.destroy === "undefined") {} else {
        window.KICKASSGAME.destroy();
    }
}

anything.prototype.asteroids = asteroids;
anything.prototype.asteroidsExit = asteroidsExit;