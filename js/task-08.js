const $form = document.querySelector(".login-form");

const submitForm = (event) => {
  const $form = event.currentTarget;
  event.preventDefault();
};

$form.addEventListener("submit", submitForm);

console.log($form.elements);

const {
  elements: { email, password },
} = $form;

console.log(email);
console.log(password);
