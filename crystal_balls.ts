function crystal_balls(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = jump;
  for (; i < breaks.length; i += jump) {
    console.log({ i, b: breaks[i] });
    if (breaks[i]) {
      break;
    }
  }

  i -= jump;

  for (let j = 0; j < jump; i++, j++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}

console.log(crystal_balls([false, false, false, false, false, true]));
