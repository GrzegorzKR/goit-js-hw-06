const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const $markup = images
  .map(
    (image) =>
      `<li><img src = ${image.url} alt = ${image.alt} class = "image-styling"></>`
  )
  .join(" ");
const $list = document.querySelector(".gallery");

$list.insertAdjacentHTML("afterbegin", $markup);

// STLES MOVED TO CSS FOLDER

// $list.classList.add("list-styling");
// $list.style.listStyle = "none";

// const $images = document.querySelectorAll("img");
// for (const image of $images) {
//   image.style.marginBottom = "20px";
//   image.style.borderRadius = "10px";
//   image.style.width = "300px";
//   image.style.boxShadow = "0 10px 10px -5px rgba(0, 0, 0, 0.3)";
// }
