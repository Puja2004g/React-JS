import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Heading";
import List from "./components/List";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <Header />
    <List />
  </div>,
  rootElement
);
