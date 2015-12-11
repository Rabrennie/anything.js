//Replaces all images with cute kittens
//Let the kittens kitvade the web! Muhameowmeowmeow
var kitvasion = function(){
    var images = document.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++){
        images[i].src = "http://placekitten.com/g/" + images[i].clientWidth + "/" + images[i].clientHeight + "/";
    }
}

anything.prototype.kitvasion = kitvasion;
