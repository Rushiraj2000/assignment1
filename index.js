import fetch from "node-fetch";
// const data = require("./data.json");

const URL = "https://s3.amazonaws.com/open-to-cors/assignment.json";

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(typeof data.products);
    const products = Object.values(data.products);
    products.sort((a, b) => {
      return ( b.popularity - a.popularity);
    });
    console.log(products);
  });

