// app.js
console.log('🛍 Welcome to E-Commerce Store');

import { getAllProducts, searchProducts } from './product.js';
import {
  addToCart,
  getCartItems,
  getCartTotal,
  updateQuantity,
  removeFromCart
} from './cart.js';
import { processPayment } from './payment.js';

console.log('\n📦 All Products:');
console.log(getAllProducts());

console.log('\n🔎 Search "phone":');
console.log(searchProducts('phone'));

console.log('\n➕ Adding to Cart');
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

console.log('\n🛒 Cart Items');
console.log(getCartItems());
console.log('Total:', getCartTotal());

console.log('\n✏ Update Quantity');
console.log(updateQuantity(1, 2));

console.log('\n🗑 Remove Item');
console.log(removeFromCart(3));

console.log('\n🛒 Updated Cart');
console.log(getCartItems());
console.log('Total:', getCartTotal());

console.log('\n💳 Checkout');
console.log(processPayment('upi', 'WELCOME10'));
