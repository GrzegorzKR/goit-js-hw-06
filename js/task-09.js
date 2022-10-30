function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const $body = document.querySelector("body");
const $btnColor = document.querySelector(".change-color");
const $spanColor = document.querySelector(".color");

const colorChange = () => {
  $body.style.backgroundColor = getRandomHexColor();
  $spanColor.textContent = getRandomHexColor();
};

$btnColor.addEventListener("click", colorChange);
