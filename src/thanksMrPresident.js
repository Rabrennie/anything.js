/**
 * Gives some thanks to the big man.
 * @return {Abstract} Joy
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 */
function thanksMrPresident() {
  var titles = document.createElement('article');
  titles.id = 'obamatitle';
  var content = document.createElement('section');
  content.id = 'obamacontent';
  var message = document.createElement('p');

  document.styleSheets[0].insertRule('#obamatitle {position:absolute; width:18em; height: 50em; bottom: 0; left: 50%; margin-left: -9em; font-size: 350%; font-weight: bold; text-align: justify; overflow: hidden; transform-origin: 50% 100%; transform: perspective(300px) rotateX(25deg);}', 0);
  document.styleSheets[0].insertRule("#obamatitle::after {position: absolute; content: ' '; left: 0; right: 0; top: 0; bottom:60%; background-image: linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%); pointer-events:none;}", 0);
  document.styleSheets[0].insertRule('#obamacontent {position:absolute; top:100%; animation: scroll 100s linear 4s infinite;}', 0);
  document.styleSheets[0].insertRule('@keyframes scroll { 0% {top:100%;} 100% {top:-170%;}}', 0);

  message.textContent = 'Thanks Obama '.repeat(100);
  content.appendChild(message);
  titles.appendChild(content);
  document.body.appendChild(titles);
};

anything.prototype.ThanksMrPresident = thanksMrPresident;
