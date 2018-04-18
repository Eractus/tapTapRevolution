const canvas = document.getElementById("ttrCanvas");
const ctx = canvas.getContext("2d");

let leftArrow = 1.5*(canvas.width/8);
let downArrow = 2.75*(canvas.width/8);
let upArrow = 4.0*(canvas.width/8);
let rightArrow = 5.25*(canvas.width/8);
let yStatic = 10;
let y = canvas.height;
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

let arrowSend = 0;

function arrowDraw() {
  if (arrowArray.length < 1) {
    alert("GAME OVER");
    document.location.reload();
  }
  arrowArray[arrowSend].drawArrow();
  arrowArray[arrowSend].dy = -3;
  arrowSend ++;
  console.log(arrowArray[arrowSend]);
  setTimeout(arrowDraw, 800);
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStaticArrows();

  if (leftPressed) {
    if (arrowArray[0].x === 84.375 &&
        arrowArray[0].y < 17 &&
        arrowArray[0].y > -10) {
      arrowArray[0].directionImage.src = "";
    }
  }
  if (downPressed) {
    if (arrowArray[0].x === 154.6875 &&
        arrowArray[0].y < 17 &&
        arrowArray[0].y > -10) {
      arrowArray[0].directionImage.src = "";
    }
  }
  if (upPressed) {
    if (arrowArray[0].x === 225 &&
        arrowArray[0].y < 17 &&
        arrowArray[0].y > -10) {
      arrowArray[0].directionImage.src = "";
    }
  }
  if (rightPressed) {
    if (arrowArray[0].x === 295.3125 &&
        arrowArray[0].y < 17 &&
        arrowArray[0].y > -10) {
      arrowArray[0].directionImage.src = "";
    }
  }
};

arrowDraw();

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

setInterval(draw, 8);
