"use strict";

console.log("hello");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 1 ? 'Here are options' : 'None'
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

function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location: ",
        location
    );
}

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounter();
};
var minusOne = function minusOne() {
    count--;
    renderCounter();
};
var reset = function reset() {
    count = 0;
    renderCounter();
};

var appRoot = document.getElementById("app");

var renderCounter = function renderCounter() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne, className: "button" },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne, className: "button" },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset, className: "button" },
            "reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
