//put that shit where everyone can see it.

var instance = new anything();

    if(typeof(window.Δ) === 'undefined'){
        window.Δ = instance;
    } else {
        console.log("Δ already defined.");
    }
    if(typeof(window.∆) === 'undefined'){
        window.∆ = instance;
    } else {
        console.log("∆ already defined.");
    }

})(window);
