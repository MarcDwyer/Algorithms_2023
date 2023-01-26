function numIslands(grid: string[][]): number {
  function search(i: number, j: number) {
    console.log({ i, j });
    if (grid[i] && grid[i][j] && grid[i][j] === "1") {
      grid[i][j] = ".";
      search(i + 1, j);
      search(i - 1, j);
      search(i, j + 1);
      search(i, j - 1);
    }
  }
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        search(i, j);
      }
    }
  }

  return count;
}

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
