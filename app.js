"use strict";

const btn = document.querySelector("button");
const paragraphe = document.querySelector("p");
const title = document.querySelector(".title");

/////// sychronous (haja tesstana haja)::

// btn.addEventListener("click", () => {
//   alert("set text");
//   paragraphe.textContent = "hello there";
// });

///// asynchronous ::

///// callback hell :::
// btn.addEventListener("click", () => {
//   setTimeout(function () {
//     paragraphe.textContent = "hello there";
//   }, 5000);
//   setTimeout(function () {
//     title.textContent = "javascript";
//   }, 3000);
// });

///////
