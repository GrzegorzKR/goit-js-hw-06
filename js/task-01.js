const categories = document.querySelectorAll(".item");
const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);

for (const category of categories) {
  const headingCategory = category.firstElementChild.textContent;
  console.log(`Category: ${headingCategory}`);

  const categoryItems = category.firstElementChild.nextElementSibling.children;
  console.log(`Elements: ${categoryItems.length}`);
}
