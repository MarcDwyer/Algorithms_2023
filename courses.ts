function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const map = new Map<number, Array<number>>();

  for (const [a, b] of prerequisites) {
    if (map.has(a)) {
      map.get(a)?.push(b);
    } else {
      map.set(a, [b]);
    }
  }
  console.log(map);

  return true;
}

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
