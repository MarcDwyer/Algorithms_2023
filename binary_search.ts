function binary_search(arr: number[], val: number) {
  let high = arr.length - 1;
  let low = 0;

  do {
    const mid = Math.floor((high + low) / 2);
    const num = arr[mid];
    console.log({ mid, num, low, high });
    if (num === val) {
      return mid;
    } else if (num < val) {
      low = mid + 1;
    } else {
      high = mid;
    }
  } while (low <= high);

  return -1;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 3));
