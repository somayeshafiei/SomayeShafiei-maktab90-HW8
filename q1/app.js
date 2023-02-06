"use strict";

let user = {};

const setterGenerator = function (property) {
  return (value) => {
    this[property] = value;
    return this;
  };
}.bind(user);
const nameSetter = setterGenerator("name");
nameSetter("jack");
console.log(user);
setterGenerator("age")(25);
console.log(user);
