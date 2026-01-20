// product.js
console.log('📦 Product module loaded');

// Product database (simulated)
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

export function getProductById(id) {
  console.log(`🔍 Searching product with ID: ${id}`);
  return products.find(p => p.id === id);
}

export function getAllProducts() {
  console.log('📋 Fetching all products');
  return products;
}

export function getProductsByCategory(category) {
  console.log(`📂 Fetching products in category: ${category}`);
  return products.filter(p => p.category === category);
}

export function searchProducts(query) {
  console.log(`🔎 Searching products with keyword: ${query}`);
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}

export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  const available = product && product.stock >= quantity;
  console.log(`📦 Stock check for product ${productId}: ${available}`);
  return available;
}

export function reduceStock(productId, quantity) {
  const product = getProductById(productId);
  if (product) {
    product.stock -= quantity;
    console.log(`➖ Reduced stock of ${product.name} by ${quantity}`);
  }
}
