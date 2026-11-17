const tasks = [
  Promise.resolve("User 1"),
  Promise.resolve("User 2"),
  Promise.reject(new Error("network error")),
  Promise.reject(new Error("network error")),
  Promise.resolve("User 5"),
];

async function runTasks(tasks) {
  const results = await Promise.allSettled(tasks);

  const successes = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  const failures = results
    .filter((result) => result.status === "rejected")
    .map((result) => result.reason);

  return {
    successes,
    failures,
  };
}

runTasks(tasks).then((result) => {
  console.log(result);
});

module.exports = { runTasks };
