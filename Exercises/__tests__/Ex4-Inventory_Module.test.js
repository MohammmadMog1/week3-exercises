describe("Inventory Module", () => {
  let inventory;

  beforeEach(() => {
    jest.resetModules();
    inventory = require("../Ex4-Inventory_Module/inventory.js");
  });

  // addItem()
  describe("addItem()", () => {
    test("should add a valid product successfully", () => {
      const product = {
        sku: "P005",
        name: "Laptop",
        price: 500,
        quantity: 3,
      };

      const result = inventory.addItem(product);

      expect(result.success).toBe(true);
      expect(result.item).toEqual(product);
      expect(inventory.findBySku("P005").success).toBe(true);
    });

    test("should reject a product with an existing SKU", () => {
      const product = {
        sku: "P001",
        name: "Another Keyboard",
        price: 50,
        quantity: 2,
      };

      const result = inventory.addItem(product);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Product already exists.");
    });
  });

  // removeItem()
  describe("removeItem()", () => {
    test("should delete an existing product", () => {
      const result = inventory.removeItem("P001");

      expect(result.success).toBe(true);
      expect(result.item.sku).toBe("P001");
      expect(inventory.findBySku("P001").success).toBe(false);
    });

    test("should return failure when SKU does not exist", () => {
      const result = inventory.removeItem("P999");

      expect(result.success).toBe(false);
      expect(result.message).toBe("Product does not exist.");
    });
  });

  // updateQuantity()
  describe("updateQuantity()", () => {
    test("should update quantity and preserve other product properties", () => {
      const result = inventory.updateQuantity("P001", 20);

      expect(result.success).toBe(true);
      expect(result.item.quantity).toBe(20);
      expect(result.item.name).toBe("Keyboard");
      expect(result.item.price).toBe(40);
    });

    test("should reject a negative quantity", () => {
      const result = inventory.updateQuantity("P001", -5);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Invalid quantity.");
    });
  });

  // findBySku()
  describe("findBySku()", () => {
    test("should return the product when SKU exists", () => {
      const result = inventory.findBySku("P001");

      expect(result.success).toBe(true);
      expect(result.item.name).toBe("Keyboard");
    });

    test("should return failure when SKU does not exist", () => {
      const result = inventory.findBySku("P999");

      expect(result.success).toBe(false);
      expect(result.message).toBe("Product does not exist.");
    });
  });

  // lowStock()
  describe("lowStock()", () => {
    test("should return products with quantity less than or equal to threshold", () => {
      const result = inventory.lowStock(2);

      expect(result).toHaveLength(2);
      expect(result.map((product) => product.sku)).toEqual(["P003", "P004"]);
    });

    test("should return an empty array when no products match", () => {
      const result = inventory.lowStock(0);

      expect(result).toEqual([]);
    });
  });

  // inventoryValue()
  describe("inventoryValue()", () => {
    test("should calculate the total inventory value", () => {
      const result = inventory.inventoryValue();

      expect(result).toBe(920);
    });

    test("should reflect changes after adding a product", () => {
      inventory.addItem({
        sku: "P005",
        name: "Laptop",
        price: 500,
        quantity: 2,
      });

      expect(inventory.inventoryValue()).toBe(1920);
    });
  });
});
