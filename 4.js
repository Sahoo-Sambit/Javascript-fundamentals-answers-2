const products = [
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Laptop", price: 120000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
  ];

let costlyProduct = {name:'', maxPrice:0};
for (const productPrice of products) {
    if(productPrice.price>costlyProduct.maxPrice){
        costlyProduct.maxPrice=productPrice.price;
        costlyProduct.name = productPrice.name;
    }
}
console.log(`The product with maximum amount is ${costlyProduct.name} which is priced at Rs. ${costlyProduct.maxPrice}`);

let cheapProduct = {name:'', minPrice: Number.MAX_VALUE};
for (const productPrice of products) {
    if(productPrice.price<costlyProduct.maxPrice){
        costlyProduct.maxPrice=productPrice.price;
        costlyProduct.name = productPrice.name;
    }
}
console.log(`The product with maximum amount is ${costlyProduct.name} which is priced at Rs. ${costlyProduct.maxPrice}`);