function delayResult(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

async function runComparison() {
  console.log("start sq");

  const sequentialStart = Date.now();

  const res1 = await delayResult("result 1", 1000);
  console.log(res1);
  const res2 = await delayResult("result 2", 2000);
  console.log(res2);
  const res3 = await delayResult("result 3", 1000);
  console.log(res3);

  const sequentialEnd = Date.now();

  console.log("sequential time:", sequentialEnd - sequentialStart);

  //-----------------------------------
  console.log("start parallel");
  const parallelStart = Date.now();

  const promises = [
    delayResult("result 1", 1000),
    delayResult("result 2", 2000),
    delayResult("result 3", 1500),
  ];
  const results = await Promise.all(promises);
  const parallelEnd = Date.now();

  console.log(results);
  console.log("parallel time:", parallelEnd - parallelStart);

  return {
    sequentialTime: sequentialEnd - sequentialStart,
    parallelTime: parallelEnd - parallelStart,
  };
}

// runComparison();

module.exports = {
  delayResult,
  runComparison,
};
