/**
* @author HartgerV
* @name thatsMyJam
* @description Streams a random song using the soundcloud API
*/
var thatsMyJam = function(){
    var xhr = new XMLHttpRequest(),
              stream = new Audio(),
              client_id = '?client_id=d4ab52d80ed2e7790c3a243495b30093',
              random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3);
    xhr.open('GET', 'http://api.soundcloud.com/tracks?q='+ random +'&'+ client_id);
    xhr.onload = function(){
        var tracks = JSON.parse(xhr.responseText);
        var i = 0;
        while(!tracks[i].streamable){
            i++;
        }
        stream.src = tracks[i].stream_url + client_id;
        stream.play();
    };
    xhr.send();
};

anything.prototype.thatsMyJam = thatsMyJam;

