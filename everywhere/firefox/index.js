var self = require('sdk/self');
var tabs = require('sdk/tabs');
var buttons = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");


var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  contentScriptFile: self.data.url("panel.js"),
  onHide: handleHide
});

var button = buttons.ToggleButton({
  id: "anything-wrap",
  label: "Δ.everywhere()",
  icon: {
    "16": "./assets/logo-16.png",
    "32": "./assets/logo-32.png",
    "64": "./assets/logo-64.png"
  },
  onChange: handleChange
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

panel.on("show", function() {
  panel.port.emit("show");
});

panel.port.on("text-entered", function (text) {
  tabs.activeTab.attach({
    contentScriptFile: self.data.url("anything.js"),
    contentScript: text
  });
  panel.hide();
  handleHide();
});

function handleHide() {
  button.state('window', {checked: false});
}