let buttons = document.querySelectorAll(".button-btn");
let resetbtn = document.querySelector("#resetbtn");
let turn0 = true;
const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log("button was clicked");
  if (turn0) {
      button.innerText = "O";
      turn0 = false;
    } else {
      button.innerText = "X";
      turn0 = true;
    }
button.disabled = true;
    checkWinner();
  });
});
function checkWinner() {
  for (let pattern of winpatterns) {
    let pos1val = buttons[pattern[0]].innerText;
    let pos2val = buttons[pattern[1]].innerText;
    let pos3val = buttons[pattern[2]].innerText;
 if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
      alert("Winner: " + pos1val);
      disableAllButtons();
      break;
    }}}
function disableAllButtons() {
  buttons.forEach(button => button.disabled = true);
}
resetbtn.addEventListener("click", () => {
  buttons.forEach(button => {
    button.innerText = "";
    button.disabled = false;
  });
  turn0 = true;
});

