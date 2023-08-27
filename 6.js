const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };

  console.log("Below are the product details.");
  for (const details in productDetails) {
    console.log(`${details}: ${productDetails[details]}`);
  }