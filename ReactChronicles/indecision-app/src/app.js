class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleOption = this.handleOption.bind(this)
        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
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

        this.setState(previousState => {
            return {
                options: previousState.options.concat(option)
            }
        })
    }
    render() {
        const title = 'IndecisionApp'
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handleClick={this.handleClick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleOption={this.handleOption}/>
            </div>
        )
    }
}

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
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
            {props.options.map(option => <Option key={option} optionText={option} />)}
        </div>
    )
}

const Option = props => {
    return (
        <div>
            {props.optionText}
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
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        if (option) {
            const error = this.props.handleOption(option)
            e.target.elements.option.value = ''
            this.setState(() => {
                return { error }
            })
        }
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