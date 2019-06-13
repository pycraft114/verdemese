const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.lineJoin = "round";

let x, y = 0;
let hslColor = 0;
let isDrawing = false;
//마우스가 클릭되었는지, 혹은 되지 않았는지에 따라 캔버스의 동작 여부를 결정함
let changeDirection = false;

function draw(event) {
  if (!clicked) return;
  ctx.beginPath();
  ctx.moveTo(x, y);
  //선이 시작되는 점
  ctx.lineTo(event.offsetX, event.offsetY);
  //선이 시작되는 지점으로 부터 클릭된 지점까지 선을 이음
  ctx.strokeStyle = `hsl(${hslColor}, 100%, 50%)`;
  ctx.stroke();
  x = event.offsetX, y = event.offsetY;
  hslColor++;

  if (hslColor === 360) { hslColor = 0 }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    changeDirection = !changeDirection;
  }

  if (changeDirection) {
    ctx.lineWidth = ctx.lineWidth + 0.5;
  } else {
    ctx.lineWidth = ctx.lineWidth - 0.5;
  }
}

document.querySelector('canvas').addEventListener('mousemove', draw);
document.querySelector('canvas').addEventListener('mousedown', ()=> {
  clicked = true;
  x = event.offsetX, y = event.offsetY;
}); //마우스를 눌렀을 때만 캔버스가 동작.
document.querySelector('canvas').addEventListener('mouseup', ()=> clicked = false);
// 마우스 버튼을 누르지 않았을 때 동작을 멈춤.
// document.querySelector('canvas').addEventListener('mouseout', ()=> clicked = false);
// 마우스가 브라우저를 벗어났을 때 동작을 멈춤
