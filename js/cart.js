let cart = JSON.parse(localStorage.getItem("cart")) || [];

function increaseQuantity(btn){

let qty =
btn.parentElement.querySelector(".qty");

qty.innerText =
parseInt(qty.innerText) + 1;
}

function decreaseQuantity(btn){

let qty =
btn.parentElement.querySelector(".qty");

if(parseInt(qty.innerText) > 1){

qty.innerText =
parseInt(qty.innerText) - 1;
}
}

function addToCartQty(btn,name,price){

let qty =
btn.parentElement.querySelector(".qty")
.innerText;

qty = parseInt(qty);

for(let i=0;i<qty;i++){

cart.push({
name,
price
});
}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(qty + " " + name + " added to cart!");
}

function updateCartCount(){

let count =
document.getElementById("cart-count");

if(count){

count.textContent = cart.length;
}
}

updateCartCount();

function scrollToMenu(){

document.getElementById("menu")
.scrollIntoView({
behavior:"smooth"
});
}