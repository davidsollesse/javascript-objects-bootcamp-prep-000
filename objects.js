var playlist = {

  Beethoven: 'I am Beethoven',
  "Lil Wayne": 'Symphony No. 5'
}
//Showing can string keys

function updatePlaylist(playlist, artist, song) {
  //var playlist = {artist: song};
  playlist[artist] = song
  return
}
//originally used create object and used artistName and songTitle without checking prior values
