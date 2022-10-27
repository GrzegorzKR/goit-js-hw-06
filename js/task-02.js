const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const $ul = document.querySelector("ul");
console.log($ul);

const newItem = document.createElement("li");
$ul.append(newItem, newItem, newItem);
