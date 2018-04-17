const canvas = document.getElementById("ttrCanvas");
const ctx = canvas.getContext("2d");

let leftArrow = 1.5*(canvas.width/8);
let downArrow = 2.75*(canvas.width/8);
let upArrow = 4.0*(canvas.width/8);
let rightArrow = 5.25*(canvas.width/8);
let yStatic = 10;
let start = canvas.height;
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

function Sprite(img, width, height, positions) {
  this.img = img;
  this.width = width;
  this.height = height;
  this.positions = positions;
}

Sprite.prototype = {
  draw: function(position, x, y) {
    let pos = this.positions[position];
    ctx.drawImage(
      this.img,
      pos[0],
      pos[1],
      this.width,
      this.height,
      x, y,
      this.width,
      this.height
    );
  }
};


const drawLeftArrow = () => {
  let leftarrow = new Image();
  leftarrow.src = "assets/leftArrowDynamic.png";
  leftarrow.addEventListener("load", loadArrow);

  function loadArrow(e) {
    animate();
  }

  let shift = 0;
  let frameWidth = 75;
  let frameHeight = 75;
  let numFrames = 0;

  function animate() {
    numFrames ++;
    ctx.clearRect(0, 0, frameWidth, frameHeight);
    ctx.drawImage(
      leftarrow,
      shift,
      0,
      frameWidth,
      frameHeight,
      leftArrow,
      start,
      frameWidth,
      frameHeight
    );

    if (numFrames === 15) {
      shift += frameWidth;
      numFrames = 0;
      shift = shift === 1200 ? 0 : shift;
    }

    requestAnimationFrame(animate);

  }
};

const drawDownArrow = () => {
  let downarrow = new Image();
  downarrow.src = "assets/downArrowDynamic.png";
  downarrow.addEventListener("load", loadArrow);

  function loadArrow(e) {
    animate();
  }

  let shift = 300;
  let frameWidth = 75;
  let frameHeight = 75;
  let numFrames = 0;

  function animate() {
    numFrames ++;
    ctx.clearRect(0, 0, frameWidth, frameHeight);
    ctx.drawImage(
      downarrow,
      shift,
      0,
      frameWidth,
      frameHeight,
      downArrow,
      start,
      frameWidth,
      frameHeight
    );

    if (numFrames === 15) {
      shift += frameWidth;
      numFrames = 0;
      shift = shift === 1200 ? 0 : shift;
    }

    requestAnimationFrame(animate);

  }
};
const drawUpArrow = () => {
  let uparrow = new Image();
  uparrow.src = "assets/upArrowDynamic.png";
  uparrow.addEventListener("load", loadArrow);

  function loadArrow(e) {
    animate();
  }

  let shift = 600;
  let frameWidth = 75;
  let frameHeight = 75;
  let numFrames = 0;

  function animate() {
    numFrames ++;
    ctx.clearRect(0, 0, frameWidth, frameHeight);
    ctx.drawImage(
      uparrow,
      shift,
      0,
      frameWidth,
      frameHeight,
      upArrow,
      start,
      frameWidth,
      frameHeight
    );

    if (numFrames === 15) {
      shift += frameWidth;
      numFrames = 0;
      shift = shift === 1200 ? 0 : shift;
    }

    requestAnimationFrame(animate);

  }
};
const drawRightArrow = () => {
  let rightarrow = new Image();
  rightarrow.src = "assets/rightArrowDynamic.png";
  rightarrow.addEventListener("load", loadArrow);

  function loadArrow(e) {
    animate();
  }

  let shift = 900;
  let frameWidth = 75;
  let frameHeight = 75;
  let numFrames = 0;

  function animate() {
    numFrames ++;
    ctx.clearRect(0, 0, frameWidth, frameHeight);
    ctx.drawImage(
      rightarrow,
      shift,
      0,
      frameWidth,
      frameHeight,
      rightArrow,
      start,
      frameWidth,
      frameHeight
    );

    if (numFrames === 15) {
      shift += frameWidth;
      numFrames = 0;
      shift = shift === 1200 ? 0 : shift;
    }

    requestAnimationFrame(animate);

  }
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStaticArrows();
  start += dy;
};

drawLeftArrow();
drawDownArrow();
drawUpArrow();
drawRightArrow();

if (leftPressed) {
  
}

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
