// from https://github.com/moovweb/harlem_shaker

var harlemShake = function() {

  var MIN_HEIGHT = 30;
  var MIN_WIDTH = 30;
  var MAX_HEIGHT = 350;
  var MAX_WIDTH = 350;

  var PATH_TO_SONG = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.ogg";

  var CSS_BASE_CLASS = "mw-harlem_shake_me";
  var CSS_SLOW_CLASS = "mw-harlem_shake_slow";
  var CSS_FIRST_CLASS = "im_first";
  var CSS_OTHER_CLASSES = ["im_drunk", "im_baked", "im_trippin", "im_blown"];

  var CSS_STROBE_CLASS = "mw-strobe_light";

  var PATH_TO_CSS = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
  var FILE_ADDED_CLASS = "mw_added_css";

  function addCSS() {
    var css = document.createElement("link");
    css.setAttribute("type", "text/css");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", PATH_TO_CSS);
    css.setAttribute("class", FILE_ADDED_CLASS);

    document.body.appendChild(css);
  }

  function removeAddedFiles() {
    var addedFiles = document.getElementsByClassName(FILE_ADDED_CLASS);
    for (var i=0; i<addedFiles.length; i++) {
      document.body.removeChild(addedFiles[i]);
    }
  }

  function flashScreen() {
    var flash = document.createElement("div");
    flash.setAttribute("class", CSS_STROBE_CLASS);
    document.body.appendChild(flash);

    setTimeout(function() {
      document.body.removeChild(flash);
    }, 100);
  }

  function size(node) {
    return {
      height: node.offsetHeight,
      width: node.offsetWidth
    };
  }

  function withinBounds(node) {
    var nodeFrame = size(node);
    return (nodeFrame.height > MIN_HEIGHT &&
            nodeFrame.height < MAX_HEIGHT &&
            nodeFrame.width > MIN_WIDTH &&
            nodeFrame.width < MAX_WIDTH);
  }

  function posY(elm) {
    var test = elm;
    var top = 0;
    while (!!test) {
      top += test.offsetTop;
      test = test.offsetParent;
    }
    return top;
  }

  function viewPortHeight() {
    var de = document.documentElement;
    if (!!window.innerWidth) {
      return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
      return de.clientHeight;
    }
    return 0;
  }

  function scrollY() {
    if (window.pageYOffset) {
      return window.pageYOffset;
    }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  }

  var vpH = viewPortHeight();
  var st = scrollY();
  function isVisible(node) {
    var y = posY(node);

    return (y >= st && y <= (vpH + st));
  }

  function playSong() {
    var audioTag = document.createElement("audio");
    audioTag.setAttribute("class", FILE_ADDED_CLASS);
    audioTag.src = PATH_TO_SONG;
    audioTag.loop = false;

    var harlem = false,
        shake = false,
        slowmo = false;
    
    audioTag.addEventListener("timeupdate", function() {
      var time = audioTag.currentTime,
          nodes = allShakeableNodes,
          len = nodes.length, i;

      // song started, start shaking first item
      if(time >= 0.5 && !harlem) {
        harlem = true;
        shakeFirst(firstNode);
      }

      // everyone else joins the party
      if(time >= 15.5 && !shake) {
        shake = true;
        stopShakeAll();
        flashScreen();
        for (i = 0; i < len; i++) {
          shakeOther(nodes[i]);
        }
      }

      // slow motion at the end
      if(audioTag.currentTime >= 28.4 && !slowmo) {
        slowmo = true;
        shakeSlowAll();
      }
    }, true);

    audioTag.addEventListener("ended", function() {
      stopShakeAll();
      removeAddedFiles();
    }, true);

    audioTag.innerHTML = "<p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p>";

    document.body.appendChild(audioTag);
    audioTag.play();
  }

  function shakeFirst(node) {
    node.className += " "+CSS_BASE_CLASS+" "+CSS_FIRST_CLASS;
  }
  function shakeOther(node) {
    node.className += " "+CSS_BASE_CLASS+" "+CSS_OTHER_CLASSES[Math.floor(Math.random()*CSS_OTHER_CLASSES.length)];
  }

  function shakeSlowAll() {
    var shakingNodes = document.getElementsByClassName(CSS_BASE_CLASS);
    for (var i=0; i<shakingNodes.length; ) {
      shakingNodes[i].className = shakingNodes[i].className.replace(CSS_BASE_CLASS, CSS_SLOW_CLASS);
    }
    CSS_BASE_CLASS = CSS_SLOW_CLASS;
  }

  function stopShakeAll() {
    var shakingNodes = document.getElementsByClassName(CSS_BASE_CLASS);
    var regex = new RegExp('\\b'+CSS_BASE_CLASS+'\\b');
    for (var i=0; i<shakingNodes.length; ) {
      shakingNodes[i].className = shakingNodes[i].className.replace(regex, "");
    }
  }

  // get first item
  var allNodes = document.getElementsByTagName("*"), len = allNodes.length, i, thisNode;
  var firstNode = null;
  for (i = 0; i < len; i++) {
    thisNode = allNodes[i];
    if (withinBounds(thisNode)) {
      if(isVisible(thisNode)) {
        firstNode = thisNode;
        break;
      }
    }
  }

  if (thisNode === null) {
    console.warn("Could not find a node of the right size. Please try a different page.");
    return;
  }

  // insert CSS
  addCSS();

  // play song
  playSong();

  var allShakeableNodes = [];

  for (i = 0; i < len; i++) {
    thisNode = allNodes[i];
    if (withinBounds(thisNode)) {
      allShakeableNodes.push(thisNode);
    }
  }
}
