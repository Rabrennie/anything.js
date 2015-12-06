var reallyPrettify = function() {

    // More frameworks = more better?
    var csslinks = ["https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css",
                    "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css",
                    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/Han/3.2.7/han.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.7/font-awesome-animation.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/cascade-framework/1.5.0/css/build-full.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/WebRupee/2.0/font.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/zurb-ink/1.0.5/ink.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/unsemantic/1.0.2/unsemantic-grid-responsive.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/toast-css/1.0.0/grid.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/yamlcss/4.1.2/core/base.min.css",
                    "https://cdnjs.cloudflare.com/ajax/libs/kule.lazy/3.0.151206/css/kule-lazy-full.min.css"];

    var cssId = 'css';
    var head = document.getElementsByTagName('head')[0];
    while(csslinks.length != 0) {
        var link = document.createElement('link');
        link.id = cssId + csslinks.length;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        var randomIndex = Math.floor(Math.random()*csslinks.length);
        link.href = csslinks.splice(randomIndex, 1);
        head.appendChild(link);
    }
}

anything.prototype.reallyPrettify = reallyPrettify;
