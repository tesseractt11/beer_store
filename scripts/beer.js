const body = document.querySelector("body");
let productsListHTML = document.querySelector(".products_list");
let products = await getBeer();

async function getBeer() {
  const API_URI = "https://api.sampleapis.com/beers/ale";
  const response = await fetch(API_URI);
  const fetchedData = await response.json();
  return fetchedData;
}

const addDataToHTML = () => {
  console.log(products);
  for (const product in products) {
    console.log(products);
    if (Object.hasOwnProperty.call(products, product)) {
      const element = products[product];
      const newProductElement = document.createElement("div");
      newProductElement.classList.add("product_item");
      newProductElement.innerHTML = `
      <img src="./images/beer_img.png" alt="no picture" />
      <h2>${element.name}</h2>
      <div class="price">${element.price}</div>`;
      productsListHTML.appendChild(newProductElement);
    }
  }
};

addDataToHTML();
