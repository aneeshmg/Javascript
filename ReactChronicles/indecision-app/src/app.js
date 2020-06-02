console.log("hello")

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const nums = [99, 98, 97]

const appRoot = document.getElementById("app");

const renderIt = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 1 ? 'Here are options' : 'None'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
            {
                app.options.map((option, i) => {
                    return <li key={i}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot);
}

const removeAll = () => {
    app.options = []
    renderIt()
}

const onMakeDecision = e => {
    const rand = Math.floor(Math.random() * app.options.length)
    const option = app.options[rand]
    alert(option)
}
const onFormSubmit = e => {
    e.preventDefault();

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    renderIt()
}


renderIt()