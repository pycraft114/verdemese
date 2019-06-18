const player = document.querySelector('.player_video');
const playStopButton = document.querySelector('.play-stop_button');
const slideCurrentTime = document.querySelector('.progress');
const progressBar = document.querySelector('.progress_filled');
const volumeButton = document.querySelector('.volume_button');
const volumeSlider = document.querySelector('.volume_slider');
const fullScreen = document.querySelector('.controls_button');

let getCurrentVolume = player.volume;
let isSliding = false;

function playVideo() {
  if (this.paused){
    this.play();
  } else {
    this.pause();
  }

  if (this.paused){
  playStopButton.innerText = '►';
} else {
  playStopButton.innerText = '❚❚';
}
}

function updateProgressBar() {
  progressBar.style.flexBasis = `${(this.currentTime/this.duration)*100}%`;
}

function chaingingPlayingIcon() {
  if (player.paused){
    player.play();
    this.innerText = '❚❚';
  } else {
    player.pause();
    this.innerText = '►';
  }
}

function muteVolume() {
  if (!player.muted){
    getCurrentVolume = volumeSlider.value;
    volumeSlider.value = 0;
    player.muted = true;
  } else {
    player.muted = false;
    volumeSlider.value = getCurrentVolume;
  }
}

function inputValueintoVolume() {
  player.volume = this.value/100;
}

function getPlayerToFullscreen() {
  player.webkitRequestFullscreen();
}

player.addEventListener('click', playVideo);
player.addEventListener('timeupdate', updateProgressBar);
playStopButton.addEventListener('click', chaingingPlayingIcon);
volumeButton.addEventListener('click', muteVolume);
volumeSlider.addEventListener('input', inputValueintoVolume);
fullScreen.addEventListener('click', getPlayerToFullscreen);

//progress를 슬라이드 하거나 클릭했을 때 currentTime을 event에 상응하는 시간으로 조정함.
slideCurrentTime.addEventListener('mousemove', (event) => {
  if(!isSliding) return;
  player.currentTime = (event.offsetX/slideCurrentTime.offsetWidth)*player.duration;
});
slideCurrentTime.addEventListener('click', (event) => {
  player.currentTime = (event.offsetX/slideCurrentTime.offsetWidth)*player.duration;
});
slideCurrentTime.addEventListener('mousedown', () => isSliding = !isSliding)
slideCurrentTime.addEventListener('mouseup', () => isSliding = false);
