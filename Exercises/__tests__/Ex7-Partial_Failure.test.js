const { runTasks } = require("../Ex7-Partial_Failure");

describe("runTasks()", () => {
  test("should return all successful results", async () => {
    const tasks = [
      Promise.resolve("User 1"),
      Promise.resolve("User 2"),
      Promise.resolve("User 3"),
    ];

    const result = await runTasks(tasks);

    expect(result.successes).toEqual(["User 1", "User 2", "User 3"]);
  });
 
  test("should collect failed results", async () => {
    const tasks = [
      Promise.reject(new Error("Network Error")),
      Promise.reject(new Error("Server Error")),
    ];

    const result = await runTasks(tasks);

    expect(result.failures).toHaveLength(2);
    expect(result.failures[0].message).toBe("Network Error");
    expect(result.failures[1].message).toBe("Server Error");
  });

  test("should collect successful and failed results together", async () => {
    const tasks = [
      Promise.resolve("User 1"),
      Promise.reject(new Error("Network Error")),
      Promise.resolve("User 3"),
      Promise.reject(new Error("Server Error")),
      Promise.resolve("User 5"),
    ];

    const result = await runTasks(tasks);

    expect(result.successes).toEqual(["User 1", "User 3", "User 5"]);

    expect(result.failures).toHaveLength(2);
  });

  test("should process all promises", async () => {
    const tasks = [
      Promise.resolve("User 1"),
      Promise.reject(new Error("Error 1")),
      Promise.resolve("User 3"),
      Promise.reject(new Error("Error 2")),
      Promise.resolve("User 5"),
    ];

    const result = await runTasks(tasks);

    expect(result.successes.length + result.failures.length).toBe(tasks.length);
  });

  test("should return empty arrays when tasks is empty", async () => {
    const result = await runTasks([]);

    expect(result).toEqual({
      successes: [],
      failures: [],
    });
  });
});
