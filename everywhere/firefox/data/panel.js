var textArea = document.getElementById("edit-box");
var runlink = document.getElementById("runLink")

runlink.addEventListener('click', function(ev)
{
    self.port.emit("text-entered", textArea.value);
});

self.port.on("show", function onShow() {
  textArea.focus();
});