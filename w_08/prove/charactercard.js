let level = 5;
let health = 100;

const levelDisplay = document.querySelector("#level");
const healthDisplay = document.querySelector("#health");
const attackedButton = document.querySelector("#attacked");
const levelUpButton = document.querySelector("#levelUp");

attackedButton.addEventListener("click", function () {
  health -= 20;

  if (health < 0) {
    health = 0;
  }

  healthDisplay.textContent = health;

  if (health === 0) {
    alert("Character Died");
    attackedButton.disabled = true;
  }
});

levelUpButton.addEventListener("click", function () {
  level += 1;
  levelDisplay.textContent = level;
});