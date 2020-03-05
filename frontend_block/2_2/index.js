function validate(e) {
  e.preventDefault();
  let form = document.querySelector(".main-form");
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("phone");
  let textInput = document.getElementById("text");
  let textMessage = document.getElementById("text-message");
  let inputs = [emailInput, phoneInput, textInput, textMessage];
  let count = 0;

  emailInput.value.match(/^[0-9a-z-_\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)
    ? emailInput.classList.add("correct")
    : emailInput.classList.add("invalid");

  phoneInput.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)
    ? phoneInput.classList.add("correct")
    : phoneInput.classList.add("invalid");

  textInput.value.match(/[A-Za-zА-Яа-яЁё]/g)
    ? textInput.classList.add("correct")
    : textInput.classList.add("invalid");

  textMessage.value != ""
    ? textMessage.classList.add("correct")
    : textMessage.classList.add("invalid");

  for (input of inputs) {
    input.value === ""
      ? input.classList.add("invalid")
      : input.classList.contains("correct")
      ? (count += 1)
      : 0;
  }
  count === inputs.length ? form.submit() : false;
}

document.querySelector(".validation").addEventListener("click", validate);
