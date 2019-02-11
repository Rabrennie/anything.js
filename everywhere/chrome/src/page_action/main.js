var textArea,
runlink,
timeout,
addΔ,
loader;

document.addEventListener('DOMContentLoaded', function () {

  textArea = document.querySelector("#edit-box");
  runlink = document.querySelector("#runLink");
  timeout = 0;
  addΔ = document.querySelector("#addΔ");
  loader = document.querySelector(".loader");

  // check if anythingjs is already loaded
  chrome.tabs.executeScript({code: 'window.Δ != undefined'}, function(e) {
    if(!e[0]) {
      injectAnything();
    } else {
      onLoad();
    }
  });

  chrome.storage.local.get("textArea", function (result) {
    if (result.textArea != undefined) {
      textArea.value = result.textArea;
    }
  });

  var insertAtCursor = function (myField, myValue) {
    if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      myField.value = myField.value.substring(0, startPos)
      + myValue
      + myField.value.substring(endPos, myField.value.length);
    } else {
      myField.value += myValue;
    }
    myField.focus();
  }

  runlink.addEventListener('click', function (ev) {
    chrome.tabs.executeScript({code: textArea.value});
    ev.preventDefault();
  });
  addΔ.addEventListener('click', function (ev) {
    insertAtCursor(textArea, 'Δ');
  });
  textArea.addEventListener('keyup', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      chrome.storage.local.set({"textArea": textArea.value}, function() {

      });
    }, 200);
  });

});

function onLoad() {
  loader.parentElement.removeChild(loader);
}

function injectAnything() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange=function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      chrome.tabs.executeScript({code: xhttp.responseText});
      onLoad();
    }
  };
  xhttp.open("GET", "https://cdn.jsdelivr.net/gh/Rabrennie/anything.js@master/dist/anything.min.js", true);
  xhttp.send();
}
