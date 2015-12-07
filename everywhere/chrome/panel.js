document.addEventListener('DOMContentLoaded', function () {
	var textArea = document.getElementById("edit-box");
	var runlink = document.getElementById("runLink")
	chrome.tabs.executeScript(null, {file: "anything.min.js"});

	var insertAtCursor =function (myField, myValue) {
	    //IE support
	    if (document.selection) {
	        myField.focus();
	        sel = document.selection.createRange();
	        sel.text = myValue;
	    }
	    //MOZILLA and others
	    else if (myField.selectionStart || myField.selectionStart == '0') {
	        var startPos = myField.selectionStart;
	        var endPos = myField.selectionEnd;
	        myField.value = myField.value.substring(0, startPos)
	            + myValue
	            + myField.value.substring(endPos, myField.value.length);
	    } else {
	        myField.value += myValue;
	    }
	}

	runlink.addEventListener('click', function (ev) {
		chrome.tabs.executeScript({code: textArea.value});
	});
	addΔ.addEventListener('click', function(ev){
		insertAtCursor(textArea, 'Δ');
	});
});