"use strict";
console.log("hi");
// ................1.............//
// function setterGenerator(x) {
//   let user = {};
//   return function nameSetter(y) {
//     user[x] = y;
//     console.log(user);
//   };
// }
// setterGenerator("name")("jack");
// ................2.............//
function setterGenerator(x) {
  let user = {};
  return function nameSetter(y) {
    user.this.x = y;
    return user;
  };
}
setterGenerator("name")("jack");
// const test = setterGenerator("name");
// console.log(test("jack"));
// setterGenerator("name")("jack");
// const uesr = {};
// function getThis() {
//   return this;
// }
// console.log(user.getThis());
