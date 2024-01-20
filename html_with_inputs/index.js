import React from "react";
import ReactDOM from "react-dom";

const fname = "Puja";
const lname = "Guchhait";
const num = 25;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <p>My lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
