// console.log([1, 2, 3] + [4, 5, 6]);
// Array is an object in JavaScript
//
// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }
// outer();

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// 1, 7, 3, 5, 2,  6, 4

// const result = [1, 2, 3].reduce((prevNum, currNum) => (prevNum += currNum), 0);
// console.log({ result });

Array.prototype.myReduce = function (func, accu) {
  for (const ele of this) {
    const result = func(accu, ele);
    accu = result;
  }

  return accu;
};

console.log(
  [1, 2, 3].myReduce((prevNum, currNum) => {
    console.log({ prevNum, currNum });
    return (prevNum += currNum);
  }, 0)
);
