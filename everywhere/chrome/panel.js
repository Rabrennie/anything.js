document.addEventListener('DOMContentLoaded', function () {
	var textArea = document.getElementById("edit-box");
	var runlink = document.getElementById("runLink");
	var timeout = 0;
	var addΔ = document.getElementById("addΔ");
	chrome.tabs.executeScript(null, {file: "anything.min.js"});
	chrome.storage.local.get("textArea", function(result){
		textArea.value = result;
		console.log(result);
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
		console.log("running");
		console.log("");
	});
	addΔ.addEventListener('click', function (ev) {
		insertAtCursor(textArea, 'Δ');
	});
	textArea.addEventListener('keyup', function () {
		timeout = setTimeout(function() {
			console.log("saving");
			chrome.storage.local.set({"textArea": textArea.value}, function() {
				alert("saved");
			});
		}, 200);
		clearTimeout(timeout);
	});
});