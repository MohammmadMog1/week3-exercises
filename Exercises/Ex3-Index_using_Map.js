function createProductIndex(products) {
  const productsMap = new Map(
    products.map((product, index) => {
      if (
        !product ||
        product.sku === undefined ||
        product.sku === null ||
        product.sku === ""
      ) {
        throw new Error(`Product at index ${index} must have a sku.`);
      }

      return [product.sku, product];
    }),
  );
  return productsMap;
}

// const products = [
//   { sku: "1", name: "Keyboard", price: 40 },
//   { sku: "2", name: "Mouse", price: 20 },
//   { sku: "3", name: "Monitor", price: 150 },
//   { sku: "4", name: "Headphones", price: 60 },
//   {  name: "Headphones", price: 60 },
// ];
// console.log(createProductIndex(products));

module.exports = createProductIndex;
