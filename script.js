const player = document.getElementById("player");

document.addEventListener("click", function () {
  player.classList.add("playerJump")
});

document.addEventListener("animationend", function () {
  player.classList.remove("playerJump")
});
