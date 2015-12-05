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
        //from https://xkcd.com/221/
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

    function negMod( n, m ) {
        return ((n % m) + m) % m;
    }

    var RGBtoCMYK = function( rgb ) {
        if ((typeof rgb) == "string" && rgb[0] == "#" && (rgb.length == 7 || rgb.length == 4)){
            if (rgb.length == 4) {
                rgb = "#"+rgb[1]+rgb[1]+rgb[2]+rgb[2]+rgb[3]+rgb[3];
            }
            newrgb = {r:0, g:0, b:0};
            newrgb.r = parseInt(rgb.substring(1,3), 16);
            newrgb.g = parseInt(rgb.substring(3,5), 16);
            newrgb.b = parseInt(rgb.substring(5,8), 16);
            rgb = newrgb;
        }
        var r = rgb['r']/255;
        var g = rgb['g']/255;
        var b = rgb['b']/255;
        var k = 1 - (Math.max(r, g, b));
        if (k != 1) {
            var c = ((1 - r) - k) / (1 - k);
            var m = ((1 - g) - k) / (1 - k);
            var y = ((1 - b) - k) / (1 - k);
        } else {
            var c = 0;
            var m = 0;
            var y = 0;
        }
        return {c: c, m: m, y: y, k: k};
    }

    var CMYKtoRGB = function( cmyk ) {
        var r = 255 * (1-cmyk.c) * (1-cmyk.k);
        var g = 255 * (1-cmyk.m) * (1-cmyk.k);
        var b = 255 * (1-cmyk.y) * (1-cmyk.k);
        return {r: r, g: g, b: b};
    }

    var RGBtoHSL = function( rgb ) {
        if ((typeof rgb) == "string" && rgb[0] == "#" && (rgb.length == 7 || rgb.length == 4)){
            if (rgb.length == 4) {
                rgb = "#"+rgb[1]+rgb[1]+rgb[2]+rgb[2]+rgb[3]+rgb[3];
            }
            newrgb = {r:0, g:0, b:0};
            newrgb.r = parseInt(rgb.substring(1,3), 16);
            newrgb.g = parseInt(rgb.substring(3,5), 16);
            newrgb.b = parseInt(rgb.substring(5,8), 16);
            rgb = newrgb;
        }
        var r = rgb['r'] / 255;
        var g = rgb['g'] / 255;
        var b = rgb['b'] / 255;
        var rgbOrdered = [r,g,b].sort();
        var l = ((rgbOrdered[0] + rgbOrdered[2]) / 2) * 100;
        var s, h;
        if (rgbOrdered[0] == rgbOrdered[2]) {
            s = 0;
            h = 0;
        } else {
            if (l >= 50) {
                s = ((rgbOrdered[2] - rgbOrdered[0])/((2.0 - rgbOrdered[2]) - rgbOrdered[0])) * 100;
            } else {
                s = ((rgbOrdered[2] - rgbOrdered[0])/(rgbOrdered[2] + rgbOrdered[0])) * 100;
            }
            if (rgbOrdered[2] == r) {
                h = ((g-b)/(rgbOrdered[2] - rgbOrdered[0])) * 60;
            } else if (rgbOrdered[2] == g) {
                h = (2+((b-r)/(rgbOrdered[2] - rgbOrdered[0]))) * 60;
            } else {
                h = (4+((r-g)/(rgbOrdered[2] - rgbOrdered[0]))) * 60;
            }
            if (h < 0) {
                h += 360;
            } else if (h > 360) {
                h = h % 360;
            }
        };
        return {
            h: h,
            s: s,
            l: l
        };
    }

    var HSLtoRGB = function( hsl ) {
        if (hsl.s == 0) {
            var grey = (hsl.l / 100) * 255;
            return {
                r: grey,
                g: grey,
                b: grey
            }
        } else {
            if (hsl.l >= 50) {
                tempOne = ((hsl.l/100) + (hsl.s/100)) - ((hsl.l/100) * (hsl.s/100));
            } else {
                tempOne = (hsl.l/100) * (1 + (hsl.s/100));
            }
            tempTwo = (2 * (hsl.l/100)) - tempOne;
            tempHue = hsl.h / 360;
            tempR = (tempHue + 0.333) % 1;
            tempG = tempHue;
            tempB = negMod((tempHue - 0.333), 1);
            var r,g,b;
            if ((6 * tempR) < 1) {
                r = tempTwo + ((tempOne - tempTwo) * 6 * tempR);
            } else if ((2 * tempR) < 1) {
                r = tempOne;
            } else if ((3 * tempR) < 2) {
                r = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempR) * 6));
            } else {
                r = tempTwo;
            }
            if ((6 * tempG) < 1) {
                g = tempTwo + ((tempOne - tempTwo) * 6 * tempG);
            } else if ((2 * tempG) < 1) {
                g = tempOne;
            } else if ((3 * tempG) < 2) {
                g = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempG) * 6));
            } else {
                g = tempTwo;
            }
            if ((6 * tempB) < 1) {
                b = tempTwo + ((tempOne - tempTwo) * 6 * tempB);
            } else if ((2 * tempB) < 1) {
                b = tempOne;
            } else if ((3 * tempB) < 2) {
                b = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempB) * 6));
            } else {
                b = tempTwo;
            }
            if (r < 0) r = 0;
            if (g < 0) g = 0;
            if (b < 0) b = 0;
            return {
                r: r * 255,
                g: g * 255,
                b: b * 255
            }
        }
    }

    var CMYKtoHSL = function( cmyk ) {
        var rgb = CMYKtoRGB(cmyk);
        return RGBtoHSL(rgb);
    }

    var HSLtoCMYK = function( hsl ) {
        var rgb = HSLtoRGB(hsl);
        return RGBtoCMYK(rgb);
    }

    var g = {
      build: function(base, shaft, end, tail) {
        return base + shaft + end + tail
      },
      base: {
        full: "8",
        half: "3"
      },
      shaftType: {
        double: "=",
        alternative: "═"
      },
      shaftLength: {
        nano: 0,
        macro: 1,
        milli: 2,
        kilo: 5,
        mega: 10,
        giga: 20,
        tera: 100
      },
      shaftBuilder: function(shaft, length) {
        return Array(length+1).join(shaft);
      },
      end: {
        circle: "D",
        circleDashed: "‎Ð",
        pointy: ">",
        rounded: ")",
        flat: "]"
      },
      tail: {
        wavy: "~",
        flat: "-",
        double: "="
      }
    }

    var nothing = function() {
		    noop();
	  }

	var divSort = function(numbers)
	{
		var sorted = [];
		var lilDivs = {};

		var bigDiv = document.createElement("div");
		bigDiv.style.display = "inline-block";

		for (var i = 0; i < numbers.length; i++)
		{
			var width = numbers[i];
			lilDiv = document.createElement("div");
			lilDiv.style.width = width;
			bigDiv.appendChild(lilDiv);
			lilDivs[width] = (lilDivs[width] || []).concat([lilDiv]);
		}

		document.body.appendChild(bigDiv);

		while (sorted.length < numbers.length)
		{
			var max = bigDiv.offsetWidth;
			bigDiv.removeChild(lilDivs[max].pop());
			sorted.push(max);
		}

		document.body.removeChild(bigDiv);

		return sorted;
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
    anything.prototype.RGBtoCMYK = RGBtoCMYK;
    anything.prototype.CMYKtoRGB = CMYKtoRGB;
    anything.prototype.RGBtoHSL = RGBtoHSL;
    anything.prototype.HSLtoRGB = HSLtoRGB;
    anything.prototype.CMYKtoHSL = CMYKtoHSL;
    anything.prototype.HSLtoCMYK = HSLtoCMYK;
    anything.prototype.g = g;
    anything.prototype.nothing = nothing;
    anything.prototype.divSort = divSort;

    //put that shit where everyone can see it.
    if(typeof(window.Δ) === 'undefined'){
        window.Δ = new anything();
    }
    else{
        console.log("Δ already defined.");
    }
})(window);
