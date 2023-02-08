"use strict";
const container = document.querySelector(".container");

const cb = function (elem1) {
  elem1.append(` Good feature`);
  elem1.style.backgroundColor = "pink";
  elem1.style.textAlign = "center";
  elem1.style.fontWeight = "bold";
};
function elemCreator(elem) {
  const test = document.createElement(elem, callback);
  container.append(test);
  callback(test);
}
elemCreator("div", cb);
