"use strict";

console.log("hello");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

var nums = [99, 98, 97];

var appRoot = document.getElementById("app");

var renderIt = function renderIt() {
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
            "button",
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove all"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option, i) {
                return React.createElement(
                    "li",
                    { key: i },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var removeAll = function removeAll() {
    app.options = [];
    renderIt();
};

var onMakeDecision = function onMakeDecision(e) {
    var rand = Math.floor(Math.random() * app.options.length);
    var option = app.options[rand];
    alert(option);
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderIt();
};

renderIt();
