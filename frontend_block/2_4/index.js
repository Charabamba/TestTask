let inputHistory = [];
let checkDelay = 500;
let timer;
let input = document.getElementById("main-input");

input.addEventListener("input", () => {
  clearTimeout(timer);
  if (input.value) {
    timer = setTimeout(function() {
      inputHistory.push(input.value);
    }, checkDelay);
  }
});

document.querySelector(".button-undo").addEventListener("click", () => {
  inputHistory.pop();
  inputHistory.length === 0
    ? (input.value = "")
    : (input.value = inputHistory[inputHistory.length - 1]);
});
