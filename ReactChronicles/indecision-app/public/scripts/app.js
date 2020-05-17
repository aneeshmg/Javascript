"use strict";

console.log("hello");

var template = React.createElement(
  "h1",
  null,
  "Hello world"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
