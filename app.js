function addClickListener(button, text) {
  button.addEventListener("click", function () {
    if (text.style.display === "none") {
      text.style.display = "inline";
      button.textContent = "-";
    } else {
      text.style.display = "none";
      button.textContent = "+";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var Buttons = document.querySelectorAll(".button");
  var texts = document.querySelectorAll(".text");

  for (var i = 0; i < Buttons.length; i++) {
    addClickListener(Buttons[i], texts[i]);
  }
});