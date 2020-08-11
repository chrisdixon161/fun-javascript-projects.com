const songs = [
  "bensound-clapandyell.mp3",
  "bensound-dance.mp3",
  "bensound-funkyelement.mp3",
  "bensound-happiness.mp3",
  "bensound-happyrock.mp3",
  "bensound-thelounge.mp3",
];

const createSongList = () => {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
};

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

songList.onclick = function (e) {
  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText;

  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing:  ${e.target.innerText}`;

  const player = document.getElementById("player");
  player.load();
  player.play();
};
