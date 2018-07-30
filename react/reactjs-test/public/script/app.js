"use strict";

Console.log("App.js is running");

// JSX

var template = React.createElement(
  "p",
  null,
  " This is JSX from app.js "
);
var appRoot = document.getElementById('app');

ReactDom.render(template, appRoot);