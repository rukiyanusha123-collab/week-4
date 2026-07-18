let products = [];
let container = document.getElementById("products");

document.getElementById("loading").innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {

    products = data;

    document.getElementById("loading").innerHTML = "";

    displayProducts(products);

})
.catch(() => {

    document.getElementById("loading").innerHTML = "";

    document.getElementById("error").innerHTML = "Failed to load products.";

});

function displayProducts(list){

    container.innerHTML="";

    list.forEach(product=>{

        container.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.title}</h3>
            
            <p>$${product.price}</p>
        </div>
        `;

    });

}

function searchProducts(){

    let text = document.getElementById("search").value.toLowerCase();

    let filtered = products.filter(product =>
        product.title.toLowerCase().includes(text)
    );

    displayProducts(filtered);

}