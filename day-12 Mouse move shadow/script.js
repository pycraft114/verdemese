const body = document.querySelector('body');
const text = document.querySelector('.shadow');
const howFarShadow = 100;
let mouseX, mouseY = 0;


function mouseMoveShadow(event) {
  mouseX = event.offsetX;
  mouseY = event.offsetY;

  if (event.target === text){
    mouseX = mouseX + event.target.offsetLeft;
    mouseY = mouseY + event.target.offsetTop;
  }

  const shadowX = Math.ceil((mouseX/body.offsetWidth*howFarShadow) - howFarShadow / 2);
  const shadowY = Math.ceil((mouseY/body.offsetHeight*howFarShadow) - howFarShadow / 2);

  text.style.textShadow = `${shadowX}px ${shadowY}px rgb(170, 170, 170)`
  console.log(shadowX, shadowY);
}

document.querySelector('body').addEventListener('mousemove', mouseMoveShadow);
