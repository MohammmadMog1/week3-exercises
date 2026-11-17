const { runComparison } = require("../Ex6-async_parallel_work");

describe("runComparison()", () => {
 describe("runComparison()", () => {
  let result;

  beforeAll(async () => {
    result = await runComparison();
  }, 10000);

  test("sequential should take longer than parallel", () => {
    expect(result.sequentialTime).toBeGreaterThan(result.parallelTime);
  });

  test("sequential should take at least 3500ms", () => {
    expect(result.sequentialTime).toBeGreaterThanOrEqual(3500);
  });
});
});
