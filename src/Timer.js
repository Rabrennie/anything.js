/*
  Initialize:

    var timer = new Δ.Timer();

  Time inline code:

    timer.start();
    // run some task
    timer.stop();
    console.log("Task took " + timer.elapsed + " milliseconds.");

  Time a function:

    var elapsed = timer.run(function() {
      // run some task
    });
*/

'use strict';

var Timer = function() {
    this._start = null;
    this.elapsed = null;
};

Timer.prototype.start = function() {
    if (this._start !== null)
        throw new Error("Timer already started.");
    this.elapsed = null;
    this._start = Date.now();
};

Timer.prototype.stop = function() {
    if (this._start === null)
        throw new Error("Timer not started.");
    this.elapsed = Date.now() - this._start;
    this._start = null;
    return this.elapsed;
};

Timer.prototype.run = function(task) {
    this.start();
    task();
    return this.stop();
};

anything.prototype.Timer = Timer;
