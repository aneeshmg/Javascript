"use strict";

console.log("hello");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
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
            "p",
            null,
            app.options.length
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
                    "Option: ",
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
