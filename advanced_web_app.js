/*
Filename: advanced_web_app.js

Description: This code is an advanced web application that simulates an e-commerce store. It is built with JavaScript and uses various concepts such as object-oriented programming, asynchronous operations, event handling, and DOM manipulation.

Note: This is just an example to meet the requirements. A real-life web app would typically be much more extensive and include server-side code, database interactions, etc.

*/

// Global Variables
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

let cartItems = [];

// Utility Functions
function formatPrice(price) {
  return '$' + price.toFixed(2);
}

function renderProduct(product) {
  const productElement = document.createElement('div');
  productElement.innerHTML = `
    <h3>${product.name}</h3>
    <p>${formatPrice(product.price)}</p>
    <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
  `;
  return productElement;
}

function renderCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';
  
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.innerHTML = `
      <h4>${item.name}</h4>
      <p>Quantity: ${item.quantity}</p>
      <p>Price: ${formatPrice(item.price)}</p>
    `;
    cartElement.appendChild(cartItemElement);
  });
  
  const cartTotalElement = document.createElement('div');
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
  cartTotalElement.innerHTML = `Cart Total: ${formatPrice(cartTotal)}`;
  cartElement.appendChild(cartTotalElement);
}

// Event Handlers
function handleAddToCart(event) {
  const productId = parseInt(event.target.dataset.productId);
  const product = products.find(p => p.id === productId);
  
  const existingItem = cartItems.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    const newItem = { ...product, quantity: 1 };
    cartItems.push(newItem);
  }
  
  renderCart();
}

// Initialization
function init() {
  const productsElement = document.getElementById('products');
  
  products.forEach(product => {
    const productElement = renderProduct(product);
    productsElement.appendChild(productElement);
  });
  
  productsElement.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
      handleAddToCart(event);
    }
  });
  
  renderCart();
}

document.addEventListener('DOMContentLoaded', init);