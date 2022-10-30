const $form = document.querySelector(".login-form");
const $submitBtn = document.querySelector("button");
const user = {
  email: "",
  password: "",
};

const submitForm = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = $form;

  if (email.value === "" || password.value === "") {
    alert("Proszę uzupełnić wszystkie pola");
  } else {
    user.email = email.value;
    user.password = password.value;
    console.log(user);
    event.currentTarget.reset();
  }
};

$form.addEventListener("submit", submitForm);
