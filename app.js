"use strict";

const btn = document.querySelector("button");
const paragraphe = document.querySelector("p");
const title = document.querySelector(".title");
const container = document.querySelector(".container");

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

//////
function renderContry(data) {
  const html = `
   <div class="card">
        <div class="flag">
          <img
            src=${data.flag.url_png}
            alt=""
          />
        </div>

        <div class="card-description">
          <h2>${data.names.common}</h2>
          <div class="info-container">
            <span>🗾 ${data.region}</span>
            <span>🧑‍🤝‍🧑 ${data.population} people</span>
          </div>
          <div class="info-container">
            <span>🗣️ ${data.languages[0].name}</span>
            <span>💵 ${data.currencies[0].name}</span>
          </div>
        </div>
      </div>
`;
  container.insertAdjacentHTML("beforeend", html);
}

const getCountry = function (country) {
  fetch(`https://api.restcountries.com/countries/v5?q=${country}`, {
    headers: {
      Authorization: "Bearer rc_live_bb168a82a730403c9513f2778b8acd58",
    },
  })
    .then(function (response) {
      return response.json(); //// convert response from JSON to js
    })
    .then((result) => {
      return result.data.objects[0];
    })
    .then((data) => {
      renderContry(data);
    });
};

getCountry("tanzania");
