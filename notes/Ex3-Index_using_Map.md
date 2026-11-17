# why we using Map in this case?

1.I used Map to convert the products array into an index where each product's SKU is used as its key.

2.Map allows me to access a product directly using get() instead of searching through the array with find().

3.Map provides better performance for repeated lookups, with an average time complexity of O(1).

4.Map provides useful methods such as set(), get(), has(), and delete() to manage data easily.

5.Therefore, Map is a suitable choice when I need frequent access to products using a unique identifier such as SKU.

| Operation                   | Array                          | Map                 |
| --------------------------- | ------------------------------ | ------------------- |
| **Search for a product**    | $O(n)$                         | $O(1)$ on average   |
| **Add an item**             | $O(1)$ at the end of the array | $O(1)$ on average   |
| **Check if a key exists**   | $O(n)$ using `some()`          | $O(1)$ on average   |
| **Get the number of items** | $O(1)$ using `length`          | $O(1)$ using `size` |
