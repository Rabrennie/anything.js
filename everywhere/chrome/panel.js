document.addEventListener('DOMContentLoaded', function () {
  var textArea = document.getElementById("edit-box");
  var runlink = document.getElementById("runLink")

  runlink.addEventListener('click', function (ev) {
    chrome.tabs.executeScript(null, {file: "anything.min.js"});
    chrome.tabs.executeScript({code: textArea.value});
  });
});