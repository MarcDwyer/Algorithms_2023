// // implement flatten function
// const myArr = [
//     [['a', 'b'], ['c', ['d'], [[['e']], ['f']]]]
//    ];
//    // flatten(myArr) result will be ["a", "b", "c", "d", "e", "f"]

function flatten(arr) {
  const result = [];
  for (const ele of arr) {
    if (Array.isArray(ele)) {
      result.push(...flatten(ele));
    } else {
      result.push(ele);
    }
  }
  return result;
}

console.log(
  flatten(
    [
      ["a", "b"],
      ["c", ["d"], [[["e"]], ["f"]]],
    ],
    'Expect ["a", "b", "c", "d", "e", "f"]'
  )
);
