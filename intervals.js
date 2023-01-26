var insert = function (intervals, newInterval) {
  const res = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (
      (interval[0] <= newInterval[0] && newInterval[0] <= interval[1]) ||
      interval[1] >= newInterval[0]
    ) {
      const nextInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
      const [a, b] = nextInterval;
      if (a === newInterval[0] && b === newInterval[1]) continue;
      newInterval = nextInterval;
      res.push(newInterval);
    } else {
      res.push(interval);
    }
  }

  return res;
};

// merge condition
// [[1,3], [2,5]]
// [1,7], [3, 6]
//  [3,7], [1, 6]

// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// );

// [[1,2],[3,10],[12,16]]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);

const a = [1, 2, 3, 4, 5];

console.log(a.splice(2));

console.log({ a });
