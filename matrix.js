var updateMatrix = function (mat) {
  const res = new Array(mat.length);
  for (let i = 0; i < mat[0].length; i++) {
    res[i] = new Array(mat[0].length).fill(0);
  }

  function search(i, j, count) {
    if (!mat[i] || (mat[i] && mat[i][j] === undefined)) {
      return count;
    } else if (mat[i][j] === 0) {
      return count;
    } else {
      count++;
      return Math.min(
        search(i + 1, j, count),
        search(i - 1, j, count),
        search(i, j + 1, count),
        search(i, j - 1, count)
      );
    }
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const count = search(i, j, 0);
      if (count !== 0) console.log({ count, i, j });
      res[i][j] = Math.max(res[i][j], count);
    }
  }
  return res;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
