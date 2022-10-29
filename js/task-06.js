const $input = document.querySelector("input");
const $dataLength = $input.dataset.length;

const formValidation = (event) => {
  if (event.currentTarget.value.length < $dataLength) {
    $input.classList.add("invalid");
  } else {
    $input.classList.add("valid");
    $input.classList.remove("invalid");
  }
};

$input.addEventListener("blur", formValidation);
