function rollDice() {
  document.getElementById("dice12").style.visibility = "hidden";
  document.getElementById("dice6").style.visibility = "visible";
  num = getRandomNumber(1, 12);
  if (num > 6) {
    document.getElementById("dice12").style.visibility = "visible";
    document.getElementById("dice6").style.visibility = "hidden";
  }



  const dice = [...document.querySelectorAll(".die-list")];

  

  dice.forEach(die => {
    console.log(die.id);
  
    
    toggleClasses(die);
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
