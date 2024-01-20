import React from "react";
import ReactDOM from "react-dom";
var image = "https://picsum.photos/100";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello world
    </h1>
    <img
      className="size"
      src="https://assets.bonappetit.com/photos/5c5d936be81bbf522a957993/1:1/w_2700,h_2700,c_limit/sambolognese-ramen-noodles.jpg"
    />
    <img src={image} />
    <img src={image + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
