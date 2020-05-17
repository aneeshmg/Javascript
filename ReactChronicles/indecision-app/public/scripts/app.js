"use strict";

console.log("hello");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "First item"
        ),
        React.createElement(
            "li",
            null,
            "Second item"
        )
    )
);

// var userName = "Aneesh"
// var userAge = 26
// var userLocation = "Tempe"

var user = {
    name: "Aneesh",
    age: 26,
    location: "Tempe"
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
