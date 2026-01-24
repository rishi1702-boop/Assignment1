let product={
    productName:"mobile",
    productPrice:10000,
    productDetails:{
        color:"black",
        ram:"8gb"
    }
}
//create product obj with 30% discount
let discountedProduct = {
    ...product,
    productPrice: 70000,
    productName: "tv"
};console.log("product", product);
console.log("discountedProduct", discountedProduct);