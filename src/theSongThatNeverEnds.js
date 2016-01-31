var theSongThatNeverEnds = function() {
  console.log('This is the song that never ends!');
  setTimeout(songThatNeverEnds, 1000);
}

anything.prototype.songThatNeverEnds = theSongThatNeverEnds;
