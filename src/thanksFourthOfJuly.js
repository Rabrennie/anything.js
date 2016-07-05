/**
 * Gives some thanks for this fourth of july.
 * @return {Abstract} Patriotism
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
function thanksJuly() {
  var freedomTitle = document.createElement('article');
  freedomTitle.id = 'julytitle';
  var freedomContent = document.createElement('section');
  freedomContent.id = 'julycontent';
  var freedomColor = document.createElement('section');
  freedomColor.id = 'julycolor';

  var freedomMessage = document.createElement('p');

  document.styleSheets[0].insertRule('#julytitle {position:absolute; width:18em; height: 50em; bottom: 0; left: 50%; margin-left: -9em; font-size: 350%; font-weight: bold; text-align: justify; overflow: hidden; transform-origin: 50% 100%; transform: perspective(300px) rotateX(25deg);}', 0);
  document.styleSheets[0].insertRule("#julytitle::after {position: absolute; content: ' '; left: 0; right: 0; top: 0; bottom:60%; background-image: linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%); pointer-events:none;}", 0);
  document.styleSheets[0].insertRule('#julycontent {position:absolute; top:100%; animation: scroll 100s linear 4s infinite;}', 0);
  document.styleSheets[0].insertRule('#julycolor {color:red; animation: blink 1s linear infinite;}', 0);
  document.styleSheets[0].insertRule('@keyframes scroll { 0% {top:100%;} 100% {top:-170%;}}', 0);
  document.styleSheets[0].insertRule('@keyframes blink { 0% {color:white;} 34% {color:red;} 66% {color:blue;}}', 0);

  freedomMessage.textContent = 'Thanks American Freedom for this fourth of July '.repeat(100);
  freedomContent.appendChild(freedomMessage);
  freedomColor.appendChild(freedomContent);
  freedomTitle.appendChild(freedomColor);
  document.body.appendChild(freedomTitle);
};

anything.prototype.ThanksFourthOfJuly = thanksJuly;
