class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleOption = this.handleOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options)
                this.setState(() => ({ options }))
        } catch(e) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }

    handleDeleteOption(optionToRemove) {
        this.setState(prevState => ({
            options: prevState.options.filter(option => optionToRemove !== option)
        }))
    }

    handleClick() {
        const rand = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[rand]
        alert(option)
    }

    handleOption(option) {
        if (!option)
            return `Enter valid option`
        else if (this.state.options.indexOf(option) > -1)
            return `Option already present`

        this.setState(previousState => ({
                options: previousState.options.concat(option)
            }))
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleClick={this.handleClick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleOption={this.handleOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'IndecisionApp'
}

const Action = props => {
    return (
        <div>
            <button
                onClick={props.handleClick}
                disabled={!props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    )
}

const Options = props => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length == 0 && <p>Please add an option to get started.</p>}
            {
                props.options.map(option => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}

// this is not being rendered, troubleshoot!
const Option = props => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={e => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Delete
            </button>
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleOption(option)

        e.target.elements.option.value = ''

        this.setState(() => ({ error }))
    }
    render() {

        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input name="option" type="text"></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))