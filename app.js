function rollDice() {
  document.getElementById("die-3").style.display = "none";
  document.getElementById("die-1").style.display = "grid";
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    console.log(die.id);
    toggleClasses(die);
    
    num = getRandomNumber(1, 12);
    if (num > 6 && die.id == "die-1") {
      die = dice[1];
      console.log(num)
      document.getElementById("die-1").style.display = "none";
      document.getElementById("die-3").style.display = "grid";


    }
    die.dataset.roll = getRandomNumber(1, 6);

    
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("roll-button").addEventListener("click", rollDice);
