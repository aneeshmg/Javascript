console.log("hello")

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
}

const template = (
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

const user = {
    name: "Aneesh",
    age: 26,
    location: "Tempe"
}

function getLocation(location) {
    if (location)
        return <p>Location: {location}</p>
}

let count = 0
const addOne = () => {
    count++
    renderCounter()
}
const minusOne = () => {
    count--
    renderCounter()
}
const reset = () => {
    count = 0
    renderCounter()
}
const appRoot = document.getElementById("app");
const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne} className="button">-1</button>
            <button onClick={reset} className="button">reset</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot);
}

renderCounter()