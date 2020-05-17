console.log("hello")

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer"
}

var template = (
    <div> 
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
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


var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);