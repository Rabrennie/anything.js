var getRandomMeme = function(memes) {
    if (memes === undefined) {
        var memes = [
            "Place",
            "Your memes",
            "Here"
        ];
    }

    return memes[Math.floor(Math.random() * memes.length)];
}
