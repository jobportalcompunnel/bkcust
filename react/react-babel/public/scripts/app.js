"use strict";

console.log("App.js is running");

// JSX

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is header "
    ),
    React.createElement(
        "p",
        null,
        " This is JSX from app.js "
    ),
    ";"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
