export function getProducts() {
  return fetch("https://dummyjson.com/products")
    .then((response) => {
      return response.json();
    });
}