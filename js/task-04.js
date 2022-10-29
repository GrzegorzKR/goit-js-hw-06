const subtractBtn = document.querySelector(`[data-action="decrement"]`);
const addBtn = document.querySelector(`[data-action="increment"]`);

let defaultValue = document.querySelector(`#value`);
let counterValue = Number(defaultValue.innerHTML);
console.log(counterValue);

const add = () => {
  counterValue = counterValue += 1;
  defaultValue.textContent = counterValue;
};

const substract = () => {
  counterValue = counterValue -= 1;
  defaultValue.textContent = counterValue;
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
