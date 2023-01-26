function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; arr.length - 1 - i; j++) {
      if (arr[j] > arr[i + 1]) {
        const tmp = arr[j];
        arr[j] = arr[i];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([10, 2, 6, 5, 8, 4]));
