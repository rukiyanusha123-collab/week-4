import { getProducts } from "./service.js";
import { displayProducts } from "./products.js";
import { hideLoading, showError } from "./helper.js";

let products = document.getElementById("products");
let loading = document.getElementById("loading");
getProducts()
  .then((data) => {

    hideLoading(loading);

  displayProducts(products, data);

  })
  .catch(() => {
    showError(loading);

  });