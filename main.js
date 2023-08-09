/*

async function showProducts() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const result = await response.json();
  result.map((result) => {
    const title = document.createElement("div");
    const id = document.createElement("p")
    const box = document.createElement("div");
    title.innerText = result.title;
    id.innerText = result.id;
    box.innerText = result.box;
    title.appendChild(title)
    box.appendChild(box)
    id.appendChild(id)
    return document.body.appendChild(box)
  })
}
showProducts();
*/


/*
fetch("https://api.escuelajs.co/api/v1/products")
  .then((response) => response.json())
  .then((results) => {
    results.map((results) => {
      const img =document.createElement("img");
      img.src = product.image;
      const item = document.createElement("div");
      item.innerText = results.title;
      return document.body.appendChild(item)
    })
  })
*/


/*


fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => createProductList(data))
  .catch(error => console.error('Error fetching data:', error));

// Create and append products using a Document Fragment
function createProductList(products) {
  const fragment = document.createDocumentFragment();
  const productListElement = document.getElementById('product-list');

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const img = document.createElement('img');
    img.src = product.image; // Use 'product.image' instead of 'product.url'
    productDiv.appendChild(img);

    const productTitle = document.createElement('h2');
    productTitle.textContent = product.title;
    productDiv.appendChild(productTitle);

    const productId = document.createElement('p');
    productId.textContent = `ID: ${product.id}`;
    productDiv.appendChild(productId);

    fragment.appendChild(productDiv);
  });

  productListElement.appendChild(fragment);
}
 */



// Fetch data from the API
fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => createProductGrid(data))
  .catch(error => console.error('Error fetching data:', error));

// Create product cards using the fetched data
function createProductGrid(products) {
  const productListElement = document.getElementById('product-list');
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.style.borderRadius = '8px';
    const productImage = document.createElement('img');
    productImage.src = product.images[0]; // Assuming first image from the array
    productCard.appendChild(productImage);
    const productId = document.createElement('h5');
    productId.textContent = `ID: ${product.id}`;
    productCard.appendChild(productId);
    const productTitle = document.createElement('h3');
    productTitle.textContent = product.title;
    productCard.appendChild(productTitle);
    const productDescription = document.createElement('p');
    productDescription.textContent = `Description: ${product.description}`;
    productCard.appendChild(productDescription);
    const productPrice = document.createElement('span');
    productPrice.textContent = `Price: $${product.price}`;
    productCard.appendChild(productPrice);

    const productUpdatedAt = document.createElement('div');
    const updatedAt = new Date(product.updatedAt).toLocaleString();
    productUpdatedAt.textContent = `Updated At: ${updatedAt}`;
    productCard.appendChild(productUpdatedAt);

    const productCreatedAt = document.createElement('div');
    const createdAt = new Date(product.creationAt).toLocaleString();
    productCreatedAt.textContent = `Created At: ${createdAt}`;
    productCard.appendChild(productCreatedAt);

    productListElement.appendChild(productCard);
  });
}
