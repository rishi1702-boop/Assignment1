// cart.js
console.log('🛒 Cart module loaded');

import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
  console.log(`➕ Adding product ${productId} (qty: ${quantity}) to cart`);

  const product = getProductById(productId);
  if (!product) return '❌ Product not found';

  if (!checkStock(productId, quantity)) {
    return '❌ Insufficient stock';
  }

  const item = cartItems.find(i => i.productId === productId);

  if (item) {
    item.quantity += quantity;
    console.log('🔄 Updated quantity in cart');
  } else {
    cartItems.push({ productId, quantity });
    console.log('🆕 Product added to cart');
  }

  return '✅ Item added to cart';
}

export function removeFromCart(productId) {
  console.log(`🗑 Removing product ${productId} from cart`);
  cartItems = cartItems.filter(i => i.productId !== productId);
  return '✅ Item removed';
}

export function updateQuantity(productId, newQuantity) {
  console.log(`✏ Updating quantity for product ${productId}`);

  if (!checkStock(productId, newQuantity)) {
    return '❌ Insufficient stock';
  }

  const item = cartItems.find(i => i.productId === productId);
  if (!item) return '❌ Item not found in cart';

  item.quantity = newQuantity;
  return '✅ Quantity updated';
}

export function getCartItems() {
  console.log('📦 Fetching cart items');
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity
    };
  });
}

export function getCartTotal() {
  const total = getCartItems().reduce((sum, item) => sum + item.totalPrice, 0);
  console.log(`💰 Cart total calculated: ₹${total}`);
  return total;
}

export function clearCart() {
  console.log('🧹 Clearing cart');
  cartItems = [];
}
