//For each celebration a function to check if the celebration is today should exist.
var listCelebrations = function() {
	return [{name: 'Christmas', image: 'https://i.imgur.com/q4qBPbm.png'}];
}

var celebrateIfAppropriate = function() {
	listCelebrations().forEach(function(celebration) {
		if (!window['Δ']['is' + celebration.name]())
			return;
		var celebrationTitle = document.createElement('h1');
		celebrationTitle.innerHTML = 'Happy ' + celebration.name + '!';
		var celebrationDiv = document.createElement('div');
		celebrationDiv.style.position = 'fixed';
		celebrationDiv.style.bottom = '5px';
		celebrationDiv.style.right = '5px';
		celebrationDiv.style.height = '300px';
		celebrationDiv.style.width = '150px';
		celebrationDiv.style.zIndex = '1000';
		celebrationDiv.style.textAlign = 'center';
		celebrationDiv.style.color = 'red';
		celebrationDiv.style.textShadow = '0 0 5px black';
		celebrationDiv.style.backgroundColor = 'rgba(127, 127, 127, .5)';
		celebrationDiv.style.backgroundImage = 'url(' + celebration.image + ')';
		celebrationDiv.style.backgroundSize = '100% 100%';
		celebrationDiv.appendChild(celebrationTitle);
		document.body.appendChild(celebrationDiv);
		console.log('celebrated ' + celebration.name);
	});
}

anything.prototype.listCelebrations = listCelebrations;
anything.prototype.celebrateIfAppropriate = celebrateIfAppropriate;

