const canvas = document.getElementById("ttrCanvas");
const ctx = canvas.getContext("2d");

let scoreDisplay = document.getElementById("score");
let comboDisplay = document.getElementById("combo");

let pause = false;
let restart = false;
let ended = false;
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
let arrowArray = [];
let nextArrow;
let score = 0;
let combo = 0;
let mainSong = document.getElementById("mainSong");
let startModal = document.getElementById("startGameModal");
let endModal = document.getElementById("endGameModal");
let arrowDrawTimeout;

const drawStaticArrows = window.onload = function() {
  let leftS = document.getElementById("left");
  ctx.drawImage(leftS, leftArrow, yStatic, 75, 75);
  let downS = document.getElementById("down");
  ctx.drawImage(downS, downArrow, yStatic, 75, 75);
  let upS = document.getElementById("up");
  ctx.drawImage(upS, upArrow, yStatic, 75, 75);
  let rightS = document.getElementById("right");
  ctx.drawImage(rightS, rightArrow, yStatic, 75, 75);
};

function arrowCreate() {
  let num = Math.floor(Math.random() * 4) + 1;
  switch (num) {
    case 1: return new ArrowSprite("left");
    case 2: return new ArrowSprite("down");
    case 3: return new ArrowSprite("up");
    case 4: return new ArrowSprite("right");
  }
}

function arrowDraw() {
  if (!pause) {
    if (ended || restart) {
      return;
    } else {
      nextArrow = arrowCreate();
      arrowArray.push(nextArrow);
      arrowArray[arrowArray.length-1].drawArrow();
      arrowArray.forEach(arrow => arrow.dy = -4);
      let time;
      if (arrowArray.length <= 20) {
        time = 600
      } else if (arrowArray.length <= 40 && arrowArray.length > 20){
        time = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
      } else {
        time = Math.floor(Math.random() * (600 - 250 + 1)) + 250;
      }
      arrowDrawTimeout = setTimeout(arrowDraw, time);
    }
  } else if (pause) {
    if (ended || restart) {
      return;
    } else {
      for (let i=0; i < arrowArray.length; i++) {
        arrowArray[i].dy = 0;
      }
      arrowDrawTimeout = setTimeout(arrowDraw, 100);
    }
  }
}

function gameStart() {
  if (startModal.style.dispay !== "none") {
    startModal.style.display = "none";
  }
  mainSong.play();
  arrowDraw();
  setInterval(draw, 1);
}

function gamePause() {
  pause = !pause;
  pause ? mainSong.pause() : mainSong.play();
}

function restarting() {
  clearTimeout(arrowDrawTimeout);
  restart = true;
  pause = false;
  score = 0;
  scoreDisplay.innerHTML = "Score: "+`${score}`;
  combo = 0;
  comboDisplay.innerHTML = "";
  mainSong.pause();
  mainSong.currentTime = 0;
  arrowArray = arrowArray.map(arrow => {
    arrow.y = canvas.height;
    arrow.dy = 0;
  });
  arrowArray = [];
}

function gameRestart() {
  restarting();
  if (restart === true) {
    restart = false;
    startModal.style.display = "flex";
  }
}

function songEnd() {
  ended = true;
  if (ended === true) {
    let applause = document.getElementById("endingSong");
    applause.play();
  }
}

function gameEnd() {
  endModal.style.visibility = "visible";
}

function playAgain() {
  endModal.style.visibility = "hidden";
  ended = false;
  gameStart();
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawStaticArrows();

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
        scoreDisplay.innerHTML = "Score: "+`${score}`;
        arrowArray[i].directionImage.src = "";
      }
    }

    if (arrowArray[i].y <= 1 && arrowArray[i].points !== false) {
      combo = 0;
      comboDisplay.innerHTML = "";
      arrowArray[i].points = false;
    }
  }
};
