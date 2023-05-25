let song = document.getElementById("song");
let masterplay = document.getElementById("masterplay");
let gif = document.getElementById("gif");

function playpause() {
  if (masterplay.classList.contains("fa-circle-pause")) {
    song.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  } else {
    song.play();
    masterplay.classList.add("fa-circle-pause");
    masterplay.classList.remove("fa-play-circle");
    gif.style.opacity = 1;
  }
}
