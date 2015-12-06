/*
  A shitty function to get a color out of a string
  Useful in chats, i guess...
 */

var stringToColor = function(s)
{
  var hash = 0;
  for (var i = 0; i < s.length; i++) {
     hash = s.charCodeAt(i) + ((hash << 5) - hash);
  }
  var c = (hash & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

anything.prototype.stringToColor = stringToColor;