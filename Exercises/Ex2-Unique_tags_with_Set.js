function getUniqueTags_way1(articles) {
  const allTags = [];
  articles.forEach(({ tags = [] }) => allTags.push(...tags));
  const uniqueTags = [...new Set(allTags)].sort();
  return uniqueTags;
}

function getUniqueTags_way2(articles) {
  const allTags = articles.flatMap(({ tags = [] }) => tags);
  const uniqueTags = [...new Set(allTags)].sort((a, b) => a.localeCompare(b));
  return uniqueTags;
}

// const articles = [
//   { title: "Article 1", tags: ["javascript", "nodejs"] },
//   { title: "Article 2", tags: ["nodejs", "AAA", "react"] },
//   { title: "Article 3", tags: ["javascript", "testing", "ajax", "HTML"] },
//   { title: "Article 4", tags: [] },
//   { title: "Article 5", tags: "" },
// ];

//  const articles = [
//     { tags: ["javascript", "", " "] },
//     { tags: ["nodejs", "   ", "react"] },
//   ];

// console.log(getUniqueTags_way1(articles));
// console.log(getUniqueTags_way2(articles));

module.exports = {
  getUniqueTags_way1,
  getUniqueTags_way2,
};
