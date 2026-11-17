const  createProductIndex  = require("../Ex3-Index_using_Map");

const products = [
  { sku: "P001", name: "Keyboard", price: 40 },
  { sku: "2", name: "Mouse", price: 20 },
  { sku: "P003", name: "Monitor", price: 150 },
  { sku: "4", name: "Headphones", price: 60 },
];

describe("createProductIndex", () => {
  let productIndex;

  beforeEach(() => {
    productIndex = createProductIndex(products);
  });

  test("returns a Map", () => {
    expect(productIndex).toBeInstanceOf(Map);
  });

  test('returns the Keyboard product for "P001"', () => {
    expect(productIndex.get("P001")).toEqual(products[0]);
  });

  test('returns false for the missing key "P999"', () => {
    expect(productIndex.has("aaa")).toBe(false);
  });

  test("contains four products", () => {
    expect(productIndex.size).toBe(4);
  });
});