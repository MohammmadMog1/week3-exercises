function isValidProduct(product) {
  if (!product || typeof product !== "object") {
    return false;
  }

  const { sku, name, price, quantity } = product;

  const isValidSku = typeof sku === "string" && sku.trim().length > 0;

  const isValidName = typeof name === "string" && name.trim().length > 0;

  const isValidPrice = typeof price === "number" && price >= 0;

  const isValidQuantity = Number.isInteger(quantity) && quantity > 0;

  return isValidSku && isValidName && isValidPrice && isValidQuantity;
}
module.exports = isValidProduct;
