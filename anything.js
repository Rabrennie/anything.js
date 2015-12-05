(function(window){

    function anything() {

        this.version = "0.0.1"

    }

    //Functions go here
    var doTheThing = function() {
        var test = 1+1;

        console.log(test);
        console.log('Thing is done');
    };

    var flipText = function(text)
    {
        var flipDict={'A':'∀','B':'𐐒','C':'Ɔ','E':'Ǝ','F':'Ⅎ','G':'פ','H':'H','I':'I','J':'ſ','L':'˥','M':'W','N':'И','P':'Ԁ','R':'ᴚ','T':'⊥','U':'∩','V':'Λ','Y':'⅄','a':'ɐ','b':'q','c':'ɔ','d':'p','e':'ǝ','f':'ɟ','g':'ƃ','h':'ɥ','i':'ᴉ','j':'ɾ','k':'ʞ','m':'ɯ','n':'u','p':'d','q':'b','r':'ɹ','t':'ʇ','u':'n','v':'ʌ','w':'ʍ','y':'ʎ','1':'Ɩ','2':'ᄅ','3':'Ɛ','4':'ㄣ','5':'ϛ','6':'9','7':'ㄥ','8':'8','9':'6','0':'0','.':'˙',',':'\'','\'':',','"':',,','`':',','<':'>','>':'<','∴':'∵','&':'⅋','_':'‾','?':'¿','!':'¡','[':']',']':'[','(':')',')':'(','{':'}','}':'{'};
        for (var i in flipDict) {
            flipDict[flipDict[i]] = i
        }
        var r = []
        for (var ix = 0; ix < text.length; ix++) {
            var c = text.charAt(ix)
            var f = flipDict[c]
            r.push(typeof f != 'undefined'? f : c);
        }
        return r.reverse().join('');
    }

    var getOffMyLawn = function(message)
    {
        alert(message);
    }

    var greetHannah = function()
    {
        alert("Hey. Uhh.. Hello.")
    }

    function hash(message) {
        return message.length.toString(16);
    }

    /**
    * Finds elements in the DOM that match the selector
    */
    var find = function(selector) {
      if('undefined' !== typeof document.querySelector)
        return document.querySelector(selector)

      return undefined;
    }

    var noop = function () {
    };

    var self = function () {
        return this;
    }

    var Δ = function () {
        return new anything();
    }

    //Just in case you need to check if something equals 5...
    var isNumber5 = function(num)
    {
      return num == 5;
    }

    var addRealFunctionalityOnTheFly = function () {
      var script   = document.createElement("script");
      script.type  = "text/javascript";
      script.src   = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
      document.body.appendChild(script);
    };

    var getRandomNumber = function ()
    {
        return 4; // chosen by fair dice roll
                  // guaranteed to be random
    }

    var everything = function()
    {
      return 42;
    }

    var twoString = function()
	{
		return "2";
	}

  var fizzbuzz = function(){
      // fire an ultra-difficult algorithm to either print Fizz, Buzz, FizzBuzz or the number
      for(var i = 1; i <= 100; i++){
        if(i%3 == 0 && i%5 == 0){
          console.log("FizzBuzz");
        }else if (i%5 == 0) {
          console.log("Buzz");
        }else if (i%3 == 0) {
          console.log("Fizz");
        }else{
          console.log(i);
        }
      }
    }

    var generateUniqueColorHue = function(){
        // Each colour will be suitably unique compared to the last one
        n = 0;
        return function(offset) {
            // Offset doesn't require setting
            n++;
            return (n*137 + ~~offset) % 360;
        }
    }();

    //Return true if today is Christmas
    var isChristmas = function()
    {
        var today = new(Date);
        // Months are 0 indexed
        return (today.getMonth() == 11 && today.getDate() == 25);
    }

    //When you need something but you don't know what
    var something = function(){
        var keys = Object.keys(anything.prototype); 
        var r = this.getRandomNumber(keys.length); 
        return anything.prototype[keys[r]].bind(this);
    }


    //prototypes go here
    anything.prototype.doTheThing = doTheThing;
    anything.prototype.flipText = flipText;
    anything.prototype.getOffMyLawn = getOffMyLawn;
    anything.prototype.greetHannah = greetHannah;
    anything.prototype.hash = hash;
    anything.prototype.find = find;
    anything.prototype.noop = noop;
    anything.prototype.self = self;
    anything.prototype.Δ = Δ;
    anything.prototype.isNumber5 = isNumber5;
    anything.prototype.addRealFunctionalityOnTheFly = addRealFunctionalityOnTheFly;
    anything.prototype.getRandomNumber = getRandomNumber;
    anything.prototype.everything = everything;
    anything.prototype.twoString = twoString;
    anything.prototype.fizzbuzz = fizzbuzz;
    anything.prototype.generateUniqueColorHue = generateUniqueColorHue;
    anything.prototype.isChristmas = isChristmas;
    anything.prototype.something = something;


    //put that shit where everyone can see it.
    if(typeof(window.Δ) === 'undefined'){
        window.Δ = new anything();
    }
    else{
        console.log("Δ already defined.");
    }
})(window);
