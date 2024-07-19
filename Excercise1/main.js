const products = [
  {
    id: 1,
    name: "MacBook",
    price: 1400,
    image: "https://picsum.photos/id/180/300",
  },
  {
    id: 2,
    name: "Old Car",
    price: 2400,
    image: "https://picsum.photos/id/111/300",
  },
  {
    id: 3,
    name: "Shoes",
    price: 1000,
    image: "https://picsum.photos/id/21/300",
  },
  {
    id: 4,
    name: "Castle",
    price: 10000,
    image: "https://picsum.photos/id/1040/300",
  },
  {
    id: 5,
    name: "Lychee",
    price: 500,
    image: "https://picsum.photos/id/1080/300",
  },
  {
    id: 6,
    name: "Skate Board",
    price: 3500,
    image: "https://picsum.photos/id/157/300",
  },
  {
    id: 7,
    name: "Alarm Clock",
    price: 1500,
    image: "https://picsum.photos/id/175/300",
  },
  { id: 8, name: "Book", price: 800, image: "https://picsum.photos/id/24/300" },
];

const main = document.querySelector("main");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = product.image;
  card.appendChild(img);

  const title = document.createElement("h3");
  title.textContent = product.name;
  card.appendChild(title);

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = `${product.price}THB`;
  card.appendChild(price);

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = `Description: ${product.name}`;
  card.appendChild(description);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.onclick = () =>
    alert(`Added to cart: ${product.name} - ${product.price}THB`);
  card.appendChild(button);

  main.appendChild(card);
});
