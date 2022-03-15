const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const restartButton = document.getElementById("restartGame");
const board = document.getElementById("board");

let scoreInterval;
let score = 0;

const buttonPlayStop = document.getElementById("buttonPlayerStop")

board.addEventListener("click", function () {
  playerJump();
});

document.addEventListener("animationend", function () {
  removeJump();
});

function playerJump() {
  player.classList.add("playerJump")

}

function removeJump() {
  player.classList.remove("playerJump")

}


function pauseGame() {
  stopAnimations();
  stopInterval();
}

function stopAnimations() {
  cactus.style.animationPlayState = 'paused';
  player.style.animationPlayState = 'paused';
  background.style.animationPlayState = 'paused';
}

function stopInterval() {
  clearInterval(scoreInterval);
}

function resumeGame() {
  playAnimations();
}

function playAnimations() {
  cactus.style.animationPlayState = 'running';
  player.style.animationPlayState = 'running';
  background.style.animationPlayState = 'running';
}

buttonPlayStop.addEventListener("click", () => {
  buttonPlayStop.classList.toggle("play");

  if (buttonPlayStop.classList.contains("play")) {
    // si es PLAY -- tiene la clase play -- continua el juego
    resumeGame();
    resumeInterval();

  } else {
    // si es PAUSE --  no tiene la clase play -- paramos las animaciones
    pauseGame();
  };
})



function resumeInterval() {
  scoreInterval = setInterval(() => {
    score++;
    document.getElementById("score").innerText = score;
  }, 1000);
}

resumeInterval();

restartButton.addEventListener("click", restartGame);

function restartGame() {
  resetScore();
  removeJump();
  cactus.classList.remove("cactusMovement");
  void cactus.offsetWidth;
  cactus.classList.add("cactusMovement");

}

function resetScore() {
  score = 0;
}

document.addEventListener("keyup", (event) => {
  if (event.key == " " || event.key == "ArrowUp"){
    playerJump();
  }
})
