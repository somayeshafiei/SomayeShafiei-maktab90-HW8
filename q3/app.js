"use strict";

function makeCounter() {
  let count = 0;
  return function inner(num = 0) {
    return (count += num);
  };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter()); // 1
console.log(counter(3)); // 4
console.log(counter(7)); // 11
console.log(counter(-5)); // 6
