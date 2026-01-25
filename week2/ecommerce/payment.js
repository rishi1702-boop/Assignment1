// payment.js
console.log('💳 Payment module loaded');

import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
  console.log(`💳 Validating payment method: ${method}`);
  return ['card', 'upi', 'cod'].includes(method);
}

export function processPayment(paymentMethod, couponCode = null) {
  console.log('🚀 Processing payment');

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  let discount = 0;
  let total = subtotal;

  if (couponCode) {
    const result = applyDiscount(subtotal, couponCode, items);
    discount = result.discount;
    total = result.finalTotal;
  }

  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
    status: 'success',
    message: 'Order placed successfully'
  };
}

function generateOrderId() {
  const id = 'ORD' + Date.now();
  console.log(`🆔 Order ID generated: ${id}`);
  return id;
}
