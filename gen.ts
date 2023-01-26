async function* gen123(): AsyncIterableIterator<number> {
  yield 1;
  yield 2;
  yield 3;
}

for await (const res of gen123()) {
  console.log({ res });
}
