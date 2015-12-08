var getListOfMichaelScottQuotes = function() {
  var arr = [];
  arr.push("The worst thing about prison was the Dementors.");
  arr.push("Occasionally, I'll hit somebody with my car. So sue me.");
  arr.push("If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.");
  arr.push("Well, just tell him to call me as ASAP as possible.");
  arr.push("I hate to see you leave, but I love to watch you go... 'Cause of your butt.");
  arr.push("You know what they say. \"Fool me once, Strike one, but fool me twice... Strike three.\"");
  arr.push("It's a good thing that Russia doesn't exist anymore.");
  arr.push("But seriously, if you break that girl's heart, I will literally kill you and your entire family.");
  arr.push("Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.");
  arr.push("You miss 100% of the shots you don't take. - Wayne Gretzky");
  arr.push("I wouldn't say I'm supertitious. But... I'm a little stitious.");
  arr.push("You don't call a retarded person retarted, that's just bad taste. You call your friends retarded when they're acting retarded.");
  arr.push("Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject, so you know you are getting the best possible information.");
  arr.push("You know what? The only thing I am worried about... is getting a boner.");
  arr.push("Nobody likes beets, Dwight! Why don't you grow something that everybody does like? You should grow candy.");
  arr.push("You need to play to win. But... you also need to win... to play.");
  arr.push("Presents are the best way to show someone how much you care. It is like this tangible thing that you can point to and say, \"Hey man, I love you this many dollars-worth.\"");
  arr.push("(About the downsizing). No I'm not going to tell them. I don't see the point in that. As a doctor you would not tell a patient if they had cancer.");
  arr.push("The rules in shotgun are very simple and very clear. The first person to shout shotgun when you're within the sight of the car gets the front seat. That's how the game's played. There are no exceptions for someone with a concussion.");
  arr.push("Society teaches us that having feelings and crying is bad and wrong. Well, that's baloney, because grief isn't wrong. There is such a thing as good grief. Just ask Charlie Brown.");
  return arr;
};

var getMichaelQuote = function() {
  var quotes = getListOfMichaelScottQuotes();
  var rand = Math.floor(Math.random() * quotes.length);
  return `${quotes[rand]} - Michael Scott.`;
};

anything.prototype.getMichaelQuote = getMichaelQuote;
