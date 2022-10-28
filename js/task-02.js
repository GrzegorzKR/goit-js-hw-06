const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const $ul = document.querySelector(`#ingredients`);

for (let i = 0; i < ingredients.length; i += 1) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = ingredients[i];
  $ul.append(newItem);
}
