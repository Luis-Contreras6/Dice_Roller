let dieRolls = []
let rollButton = document.querySelector("#rollButton")
let totalRolls = document.querySelector("#totalRolls")

let showRolls = document.querySelector("#showRolls")
let rollsList = document.querySelector("#rollsList")


rollButton.addEventListener("click", function () {
  numRolled = document.getElementById('numRolls').value
  dieRolls = []

  let i = 0
  while (i < numRolled) {
    i++
    let resultOfEachDice = 0;
    resultOfEachDice = Math.floor((Math.random() * 6) + 1);
    dieRolls.push(resultOfEachDice);
  }
  console.log(dieRolls)
  console.log(dieRolls.reduce((a, b) => a + b, 0))
  totalRolls.innerHTML = dieRolls.reduce((a, b) => a + b, 0);
})

showRolls.addEventListener("click", function () {
  let counter = 0
  while (counter < dieRolls.length) {
    rollsList.innerHTML += "<li>" + dieRolls[counter] + "</li>";
    counter += 1
  }
})

resetButton.addEventListener('click', function () {
  numRolled.value = newCounterValue = ' ';
  totalRolls.innerHTML = newCounterValue = '';
  rollsList.innerHTML = newCounterValue = ' ';
})