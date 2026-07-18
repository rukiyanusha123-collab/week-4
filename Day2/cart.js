let cart=[
    {name:"T-Shirt", price:1500},
    {name:"Jeans" ,price:1200},
    {name:"Shoes",price:2000},
    {name:"Cuban Chain Ring",price:700},
    {name:"Cross Earing",price:300},
    {name:"Watch",price:5000},
    {name:"HEad set",price:3000},
    {name:"Baseball Cap",price:500},
]
let total=cart.reduce((sum,item) => {
    return sum+item.price;
}, 0);

console.log(total);
cart.sort((a, b) => {
    return a.price - b.price;
});

console.log(cart);

console.log("Shopping Cart");
console.log("Total Price:",total);
console.log("Cheapest Item:",cart[0].name);

