/**
 * Let's break as many contribution rules as possible.
 * Also, 2-space indentation is superior.
 */

// 1. Nothing that'll crash a web page.
var boom = function()
{
	// division by zero is impossible, so modern 
	// browsers must exit when encountering this.
	var x = 1 / 0; 
}

// 2. Can't violate GitHub terms of service.
var breakToS = function()
{
	console.log('bitbucket is better');
}

// 3i. Nothing malicious.
var hackTheWorld = function()
{
	// hacking in progress!
	window.location = 'http://i.imgur.com/iVHfwLc.gifv';
}

// 3ii. Deleting stuff that doesn't need to be.
var deleteItAll = function()
{
	delete Δ.deleteItAll;
	delete anything.prototype.deleteItAll;
}

anything.prototype.boom = boom;
anything.prototype.breakToS = breakToS;
anything.prototype.hackTheWorld = hackTheWorld;
anything.prototype.deleteItAll = deleteItAll;