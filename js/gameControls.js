document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 37:
      leftPressed = true;
      break;
    case 38:
      upPressed = true;
      break;
    case 39:
      rightPressed = true;
      break;
    case 40:
      downPressed = true;
      break;
    case 80:
      gamePause();
      break;
  }
}

function keyUpHandler(e) {
  switch (e.keyCode) {
    case 37:
      leftPressed = false;
      break;
    case 38:
      upPressed = false;
      break;
    case 39:
      rightPressed = false;
      break;
    case 40:
      downPressed = false;
      break;
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
