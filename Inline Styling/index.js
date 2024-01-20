var React = require("react");
var ReactDOM = require("react-dom");

const custom = {
  color: "red",
  fontSize: "100px",
  border: "2px solid black",
};

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello world</h1>
    <h2 style={custom}>This is heading 2</h2>
  </div>,
  document.getElementById("root")
);
