const { inventory } = require("./inventory.data.js");
const isValidProduct = require("./isValidProduct.js");
const createProductIndex = require("../Ex3-Index_using_Map.js");
const createResponse = require("./messages");

const inventoryMapObj = createProductIndex(inventory);

function isValidSku(sku) {
  return typeof sku === "string" && sku.trim().length > 0;
}

// addItem()
function addItem(newProduct) {
  if (!isValidProduct(newProduct)) {
    return createResponse(false, "added", "Invalid product data.", newProduct);
  }

  if (inventoryMapObj.has(newProduct.sku)) {
    return createResponse(
      false,
      "added",
      "Product already exists.",
      newProduct,
    );
  }

  inventoryMapObj.set(newProduct.sku, newProduct);

  return createResponse(
    true,
    "added",
    "Product added successfully.",
    newProduct,
  );
}

// removeItem()
function removeItem(sku) {
  if (!isValidSku(sku)) {
    return createResponse(false, "deleted", "Invalid SKU.", sku);
  }

  if (!inventoryMapObj.has(sku)) {
    return createResponse(false, "deleted", "Product does not exist.", sku);
  }

  const deletedProduct = inventoryMapObj.get(sku);
  inventoryMapObj.delete(sku);

  return createResponse(
    true,
    "deleted",
    "Product deleted successfully.",
    deletedProduct,
  );
}

// updateQuantity()
function updateQuantity(sku, newQuantity) {
  if (!isValidSku(sku)) {
    return createResponse(false, "updated", "Invalid SKU.", sku);
  }

  if (!Number.isInteger(newQuantity) || newQuantity < 0) {
    return createResponse(false, "updated", "Invalid quantity.", newQuantity);
  }

  if (!inventoryMapObj.has(sku)) {
    return createResponse(false, "updated", "Product does not exist.", sku);
  }

  const existingProduct = inventoryMapObj.get(sku);

  const updatedProduct = {
    ...existingProduct,
    quantity: newQuantity,
  };

  inventoryMapObj.set(sku, updatedProduct);

  return createResponse(
    true,
    "updated",
    "Quantity updated successfully.",
    updatedProduct,
  );
}

// findBySku()
function findBySku(sku) {
  if (!isValidSku(sku)) {
    return createResponse(false, "findBySku", "Invalid SKU.", sku);
  }

  if (!inventoryMapObj.has(sku)) {
    return createResponse(false, "findBySku", "Product does not exist.", sku);
  }

  return createResponse(
    true,
    "findBySku",
    "Product fetched successfully.",
    inventoryMapObj.get(sku),
  );
}

// lowStock()
function lowStock(threshold) {
  if (
    !Number.isInteger(threshold) ||
    !Number.isFinite(threshold) ||
    threshold < 0
  ) {
    throw new Error("Threshold must be a non-negative integer.");
  }

  return [...inventoryMapObj.values()].filter(
    (product) => product.quantity <= threshold,
  );
}

// inventoryValue()
function inventoryValue() {
  return [...inventoryMapObj.values()].reduce(
    (acc, cur) => acc += cur.price * cur.quantity,
    0,
  );
}

let obAdd = { sku: "P005", name: "hhhhh", price: 60, quantity: 2 };
let obDelete = { sku: "P0043", name: "Headphones", price: 60, quantity: 2 };
let obUpdated = { sku: "P004", name: "Headphones", price: 60, quantity: -10 };
// console.log(addItem(obAdd));
// console.log(removeItem("P004"));
// console.log(updateQuantity(obUpdated));
// console.log(findBySku("P003"));
// console.log(inventoryMapObj);
// console.log(inventoryValue());

module.exports = {
  addItem,
  removeItem,
  updateQuantity,
  findBySku,
  lowStock,
  inventoryValue,
};
