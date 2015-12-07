var play_pingpong = function(toggle){
	if(toggle == "pong"){
		setTimeout(function(){
			play_pingpong("ping");
		}, 1000);
    return pong();
	}else{
		setTimeout(function(){
			play_pingpong("pong");
		}, 1000);
    return ping();
	}
}

anything.prototype.play_pingpong = play_pingpong;