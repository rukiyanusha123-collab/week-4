let products = document.getElementById("products");
let loading = document.getElementById("loading");

fetch("https://fakestoreapi.com/products/category/jewelery")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    loading.style.display = "none";

    data.forEach((item) => {

      products.innerHTML += `
        <div class="card">
          <img src="${item.image}">
          <h3>${item.title}</h3>
          <p>$${item.price}</p>
        </div>
      `;

    });

  })
  .catch(() => {

    loading.innerHTML = "Failed to load products.";

  });