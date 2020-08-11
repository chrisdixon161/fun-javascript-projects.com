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
document.getElementById("songList").appendChild(createSongList());
