var canFinish = function (numCourses, prerequisites) {
  let count = 0;

  const map = new Map();

  for (let i = 0; i < prerequisites.length; i++) {
    if (map.has(prerequisites[1])) {
      if (map.get(prerequisites[1]) === prerequisites[0]) {
        return false;
      }
    }
    count += 2;
    map.set(prerequisites[1], prerequisites[0]);
  }

  return count === numCourses;
};

// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ])
// );

// console.log(canFinish(2, [[1, 0]]));

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);
