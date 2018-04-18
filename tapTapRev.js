const canvas = document.getElementById("ttrCanvas");
const ctx = canvas.getContext("2d");

let leftArrow = 1.5*(canvas.width/8);
let downArrow = 2.75*(canvas.width/8);
let upArrow = 4.0*(canvas.width/8);
let rightArrow = 5.25*(canvas.width/8);
let yStatic = 10;
let dy = -1;
let leftPressed = false;
let downPressed = false;
let upPressed = false;
let rightPressed = false;

const drawStaticArrows = window.onload = function() {
  let leftS = document.getElementById("left arrow static");
  ctx.drawImage(leftS, leftArrow, yStatic, 75, 75);
  let downS = document.getElementById("down arrow static");
  ctx.drawImage(downS, downArrow, yStatic, 75, 75);
  let upS = document.getElementById("up arrow static");
  ctx.drawImage(upS, upArrow, yStatic, 75, 75);
  let rightS = document.getElementById("right arrow static");
  ctx.drawImage(rightS, rightArrow, yStatic, 75, 75);
};

function arrowCreate() {
  let num = Math.floor(Math.random() * 4) + 1;
  switch (num) {
    case 1: return new Arrow("left");
    case 2: return new Arrow("down");
    case 3: return new Arrow("up");
    case 4: return new Arrow("right");
  }
}

let arrowArray = [];
for (let i=0; arrowArray.length < 40; i++) {
  arrowArray.push(arrowCreate());
}

function arrowDraw() {
  for (let i=0; i<arrowArray.length; i++) {
    arrowArray[i].drawArrow();
    arrowArray[i].start += dy;
    // arrowArray.splice(i, 1);
    // setInterval(arrowDraw(), 3000);
  }
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStaticArrows();
};

arrowDraw();

// if (leftPressed) {
//   if (arrowLeft.x === 84.375 &&
//     arrowLeft.start + dy < 10 &&
//     arrowLeft.start + dy > 0
//   ) {  }
// }

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode === 37) {
    leftPressed = true;
  } else if (e.keyCode === 38) {
    upPressed = true;
  } else if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 40) {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 37) {
    leftPressed = false;
  } else if (e.keyCode === 38) {
    upPressed = false;
  } else if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 40) {
    downPressed = false;
  }
}

setInterval(draw, 6);
