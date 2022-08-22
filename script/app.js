/* ----------------------------- selection ----------------------------- */

const players = document.getElementById("players");
const list = document.getElementById("list");

players.addEventListener("click", (e) => {
  let name;
  if (e.target.nodeName === "BUTTON") {
    if (list.childElementCount > 4) {
      alert("You can't add more then 5 players");
      return;
    }
    name = e.target.parentElement.querySelector(".name").innerText;
    console.log(name);
    createListItem(name);
    e.target.setAttribute("disabled", true);
    e.target.innerText = "Selected";
  }
});

function createListItem(name) {
  const li = document.createElement("li");
  li.innerText = name;
  list.appendChild(li);
}

/* ------------------------- budget Calculation ------------------------ */

const perPlayerCost = document.getElementById("per-player-cost");
const subCalculation = document.getElementById("sub-calculation");
const playerCost = document.getElementById("player-cost");
const managerCost = document.getElementById("manager-cost");
const coachCost = document.getElementById("coach-cost");
const totalCalculation = document.getElementById("total-calculation");
const totalCost = document.getElementById("total-cost");

function inputValidation(element) {
  if (isNaN(parseFloat(element.value))) {
    element.value = "";
    alert("Please Enter a valid input");
    return false;
  }
  return true;
}
subCalculation.addEventListener("click", () => {
  if (list.childElementCount === 0) {
    alert("Select At least 1 player");
    return;
  }
  inputValidation(perPlayerCost);
  playerCost.innerText =
    parseFloat(perPlayerCost.value) * list.childElementCount;
});

totalCalculation.addEventListener("click", () => {
  if (inputValidation(managerCost)) {
    if (inputValidation(coachCost)) {
      totalCost.innerText =
        parseFloat(playerCost.innerText) +
        parseFloat(managerCost.value) +
        parseFloat(coachCost.value);
    }
  }
});
