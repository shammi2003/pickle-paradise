const vegPickles = [
    { name: "Mango Pickle", price: 150, image: "https://via.placeholder.com/150?text=Mango+Pickle" },
    { name: "Lime Pickle", price: 120, image: "https://via.placeholder.com/150?text=Lime+Pickle" },
    { name: "Mixed Vegetable Pickle", price: 180, image: "https://via.placeholder.com/150?text=Mixed+Vegetable+Pickle" }
];

const nonVegPickles = [
    { name: "Prawn Pickle", price: 250, image: "https://via.placeholder.com/150?text=Prawn+Pickle" },
    { name: "Fish Pickle", price: 300, image: "https://via.placeholder.com/150?text=Fish+Pickle" },
    { name: "Chicken Pickle", price: 280, image: "https://via.placeholder.com/150?text=Chicken+Pickle" }
];

let cart = [];

function loadProducts() {
    const vegContainer = document.getElementById('veg-pickles');
    const nonVegContainer = document.getElementById('nonveg-pickles');

    vegPickles.forEach(product => {
        const productElement = createProductElement(product);
        vegContainer.appendChild(productElement);
    });

    nonVegPickles.forEach(product => {
        const productElement = createProductElement(product);
        nonVegContainer.appendChild(productElement);
    });
}

function createProductElement(product) {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;
    return div;
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });

    totalPrice.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert(`Order placed successfully! Total: ₹${document.getElementById('total-price').innerText}`);
        cart = [];
        updateCart();
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);
