console.log("hello")

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
}

var template = (
    <div> 
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 1 ? 'Here are options' : 'None'}</p>
        <ol>
            <li>First item</li>
            <li>Second item</li>
        </ol>
    </div>
)

// var userName = "Aneesh"
// var userAge = 26
// var userLocation = "Tempe"

var user = {
    name: "Aneesh",
    age: 26,
    location: "Tempe"
}

function getLocation(location) {
    if (location) 
        return <p>Location: {location}</p>
}


var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anon'}</h1>
        {user.age > 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);