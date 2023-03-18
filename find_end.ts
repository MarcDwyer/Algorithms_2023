function find_end(arr: string[]) {
  const cache = new Set();
  const end = "E";

  let result = [-1, -1];

  let passes = 0;

  function search(x: number, y: number) {
    if (!arr[x] || (arr[x] && !arr[x][y]) || cache.has(`${x}${y}`)) {
      return;
    }
    passes++;
    if (arr[x][y] === end) {
      result = [x, y];
    }
    cache.add(`${x}${y}`);
    if (arr[x][y]) {
      search(x + 1, y);
      search(x - 1, y);
      search(x, y + 1);
      search(x, y - 1);
    }
  }

  search(0, 0);
  return { result, passes };
}

const test = ["######", "E#####", "######"];

console.log(find_end(test));
