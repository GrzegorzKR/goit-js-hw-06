const $textInput = document.querySelector(`#name-input`);
console.log($textInput);

const $textOutput = document.querySelector(`#name-output`);

$textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    $textOutput.textContent = "Anonymous";
  } else $textOutput.textContent = event.currentTarget.value;
});