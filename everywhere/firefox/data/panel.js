var textArea = document.getElementById("edit-box");
var runlink = document.getElementById("runLink");
var insertlink = document.getElementById("addΔ");

runlink.addEventListener('click', function(ev)
{
	self.port.emit("text-entered", textArea.value);
});

var insertAtCursor =function (myField, myValue) {
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
	
insertlink.addEventListener('click', function(ev){
	insertAtCursor(textArea, 'Δ');
});

self.port.on("show", function onShow() {
	textArea.focus();
});