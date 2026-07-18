export function displayProducts(productsContainer, data) {
  data.products.forEach((item) => {
    productsContainer.innerHTML += `
      <div class="card">
        <img src="${item.thumbnail}">
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
      </div>
    `;
  });
}