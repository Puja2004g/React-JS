//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
var React = require("react");
var ReactDOM = require("react-dom");

let date = new Date(2004, 2, 25, 9);
let currentDate = date.getHours();

let custom = {
  color: "",
};

let greetings;

if (currentDate < 12) {
  greetings = "Good Morning";
  custom.color = "red";
} else if (currentDate < 18) {
  greetings = "Good Afternoon";
  custom.color = "green";
} else {
  greetings = "Good Night";
  custom.color = "blue";
}

ReactDOM.render(
  <h1 style={custom}>{greetings}</h1>,
  document.getElementById("root")
);
