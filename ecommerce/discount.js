// discount.js
console.log('🏷 Discount module loaded');

const coupons = {
  WELCOME10: { type: 'percentage', value: 10, minAmount: 1000 },
  FLAT500: { type: 'flat', value: 500, minAmount: 5000 },
  ELECTRONICS20: { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
  console.log(`🎟 Validating coupon: ${couponCode}`);

  const coupon = coupons[couponCode];
  if (!coupon) {
    return { valid: false, message: 'Invalid coupon' };
  }

  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: 'Minimum amount not met' };
  }

  if (coupon.category) {
    const applicable = cartItems.some(i => i.category === coupon.category);
    if (!applicable) {
      return { valid: false, message: 'Category mismatch' };
    }
  }

  return { valid: true, message: 'Coupon valid' };
}

export function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];
  const discount =
    coupon.type === 'percentage'
      ? (cartTotal * coupon.value) / 100
      : coupon.value;

  console.log(`💸 Discount calculated: ₹${discount}`);
  return discount;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  console.log('🏷 Applying discount');

  const validation = validateCoupon(couponCode, cartTotal, cartItems);
  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  const discount = calculateDiscount(couponCode, cartTotal);

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: 'Discount applied'
  };
}
