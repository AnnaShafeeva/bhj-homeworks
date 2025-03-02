let countWin = 0;
let countLoss = 0;

function getHole(index) {
  return document.getElementById("hole" + (index + 1));
}

function updateCount() {
  countWin = 0;
  countLoss = 0;
  document.getElementById("dead").textContent = countWin;
  document.getElementById("lost").textContent = countLoss;
}

for (let i = 0; i < 9; i++) {
  getHole(i).onclick = () => {
    if (getHole(i).className.includes("hole_has-mole")) {
      countWin += 1;
      document.getElementById("dead").textContent = countWin;
    } else {
      countLoss += 1;
      document.getElementById("lost").textContent = countLoss;
    }

    if (countWin === 10) {
      alert("Вы выиграли!");
      updateCount();
    } else if (countLoss === 5) {
      alert("Игра окончена, попробуйте заново!");
      updateCount();
    }
  };
}
