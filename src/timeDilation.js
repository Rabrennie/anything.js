    /* Calculates Time Dilation (Einstein's Theory of Special Relativity)
                                               ~ Courtesy of RJGordon :D
                                               
     * Parameters: 'velocity' (type: float, unit: meters/second) - Velocity relative to earth
                   'duration' (type: float, unit: seconds) - Duration relative to thing moving at given velocity
     
     * Returns: time passed on Earth
    */           
    var calcTimeDilation = function() {
        var args = Array.prototype.slice.call(arguments);
        var timeDilation = args.reduce(function(velocity, duration) {
            var c = 299792458; // speed of light in m/s
            var tickDistance = Math.sqrt(Math.pow(c, 2) + Math.pow(velocity, 2));
            var tickTime = tickDistance / c;
            
            return(tickTime * duration);
        });
        return(timeDilation);
    }

    anything.prototype.calcTimeDilation = calcTimeDilation;
