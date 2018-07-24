const canvas = document.getElementById("ttrCanvas");
const ctx = canvas.getContext("2d");

let scoreDisplay = document.getElementById("score");
let comboDisplay = document.getElementById("combo");

let leftArrow = 1.5*(canvas.width/8);
let downArrow = 2.75*(canvas.width/8);
let upArrow = 4.0*(canvas.width/8);
let rightArrow = 5.25*(canvas.width/8);
let yStatic = 40;
let y = canvas.height;
let leftPressed = false;
let downPressed = false;
let upPressed = false;
let rightPressed = false;
let score = 0;
let combo = 0;
let mainSong = document.getElementById("player");

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
for (let i=0; arrowArray.length < 215; i++) {
  arrowArray.push(arrowCreate());
}

let arrowSend = 0;

function arrowDraw() {
  arrowArray[arrowSend].drawArrow();
  arrowArray[arrowSend].dy = -5;
  arrowSend ++;
  setTimeout(arrowDraw, 400);
}

function playAgain() {
  alert("Please Refresh to Play Again!");
  document.location.reload();
}

function gameEnd() {
  if (arrowArray[arrowArray.length - 1].y === 0) {
    setTimeout(playAgain, 2000);
  }
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStaticArrows();
  mainSong.play();

  for (let i=0; i<arrowArray.length; i++) {
    if (leftPressed) {
      if (arrowArray[i].x === 84.375 && arrowArray[i].y < 28 && arrowArray[i].y > 1) {
        if (arrowArray[i].combo === true) {
          combo += 1;
          arrowArray[i].combo = false;
        }
        comboDisplay.innerHTML = combo;

        if (arrowArray[i].points === true && combo <= 10) {
          score += 50;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 10 && combo <= 25) {
          score += 75;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 25 && combo <= 50) {
          score += 100;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 50 && combo <= 100) {
          score += 150;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 100) {
          score += 200;
          arrowArray[i].points = false;
        }
        scoreDisplay.innerHTML = "Score: "+`${score}`;
        arrowArray[i].directionImage.src = "";
      }
    }

    if (downPressed) {
      if (arrowArray[i].x === 154.6875 && arrowArray[i].y < 28 && arrowArray[i].y > 1) {
        if (arrowArray[i].combo === true) {
          combo += 1;
          arrowArray[i].combo = false;
        }
        comboDisplay.innerHTML = combo;

        if (arrowArray[i].points === true && combo <= 10) {
          score += 50;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 10 && combo <= 25) {
          score += 75;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 25 && combo <= 50) {
          score += 100;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 50 && combo <= 100) {
          score += 150;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 100) {
          score += 200;
          arrowArray[i].points = false;
        }
        scoreDisplay.innerHTML = "Score: "+`${score}`
        arrowArray[i].directionImage.src = "";
      }
    }

    if (upPressed) {
      if (arrowArray[i].x === 225 && arrowArray[i].y < 28 && arrowArray[i].y > 1) {
        if (arrowArray[i].combo === true) {
          combo += 1;
          arrowArray[i].combo = false;
        }
        comboDisplay.innerHTML = combo;

        if (arrowArray[i].points === true && combo <= 10) {
          score += 50;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 10 && combo <= 25) {
          score += 75;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 25 && combo <= 50) {
          score += 100;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 50 && combo <= 100) {
          score += 150;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 100) {
          score += 200;
          arrowArray[i].points = false;
        }
        scoreDisplay.innerHTML = "Score: "+`${score}`
        arrowArray[i].directionImage.src = "";
      }
    }

    if (rightPressed) {
      if (arrowArray[i].x === 295.3125 && arrowArray[i].y < 28 && arrowArray[i].y > 1) {
        if (arrowArray[i].combo === true) {
          combo += 1;
          arrowArray[i].combo = false;
        }
        comboDisplay.innerHTML = combo;

        if (arrowArray[i].points === true && combo <= 10) {
          score += 50;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 10 && combo <= 25) {
          score += 75;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 25 && combo <= 50) {
          score += 100;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 50 && combo <= 100) {
          score += 150;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 100) {
          score += 200;
          arrowArray[i].points = false;
        }
        scoreDisplay.innerHTML = "Score: "+`${score}`
        arrowArray[i].directionImage.src = "";
      }
    }

    if (arrowArray[i].y <= 1 && arrowArray[i].points !== false) {
      combo = 0;
      comboDisplay.innerHTML = "";
      arrowArray[i].points = false;
    }
  }
  gameEnd();
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

function toggleMuteButton() {
  let sound = document.getElementById("player");
  if (sound.muted === false) {
    sound.muted = true;
  } else if (sound.muted === true){
    sound.muted = false;
  }
}

setInterval(draw, 8);