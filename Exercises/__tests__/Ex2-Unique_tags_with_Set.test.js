const {
  getUniqueTags_way1,
  getUniqueTags_way2,
} = require("../Ex2-Unique_tags_with_Set");

describe("getUniqueTags_way1", () => {
  test("should return unique and sorted tags", () => {
    const articles = [
      { tags: ["javascript", "nodejs"] },
      { tags: ["nodejs", "react"] },
    ];

    expect(getUniqueTags_way2(articles)).toEqual([
      "javascript",
      "nodejs",
      "react",
    ]);
  });

  test("should return an empty array when articles is empty", () => {
    expect(getUniqueTags_way1([])).toEqual([]);
  });

  test("should return sorted tags from a single article", () => {
    const articles = [{ tags: ["react", "javascript", "nodejs"] }];

    expect(getUniqueTags_way1(articles)).toEqual([
      "javascript",
      "nodejs",
      "react",
    ]);
  });

  test("should handle empty and whitespace-only tags", () => {
    const articles = [
      { tags: ["javascript", "", " "] },
      { tags: ["nodejs", "   ", "react"] },
    ];

    expect(getUniqueTags_way1(articles)).toEqual([
      "",
      " ",
      "   ",
      "javascript",
      "nodejs",
      "react",
    ]);
  });

  test("should ignore articles with empty tags", () => {
    const articles = [
      { tags: ["javascript", "nodejs"] },
      { tags: "" },
      { tags: [] },
    ];

    expect(getUniqueTags_way1(articles)).toEqual(["javascript", "nodejs"]);
  });
});

describe("getUniqueTags_way1", () => {
  test("should return unique tags sorted alphabetically", () => {
    const articles = [
      { tags: ["react", "AAA"] },
      { tags: ["javascript", "HTML", "ajax", "react"] },
    ];

    expect(getUniqueTags_way1(articles)).toEqual([
      "AAA",
      "HTML",
      "ajax",
      "javascript",
      "react",
    ]);
  });
});

describe("getUniqueTags_way2", () => {
  test("should return unique tags sorted using localeCompare", () => {
    const articles = [
      { tags: ["react", "AAA"] },
      { tags: ["javascript", "HTML", "react"] },
    ];

    expect(getUniqueTags_way2(articles)).toEqual([
      "AAA",
      "HTML",
      "javascript",
      "react",
    ]);
  });
});
