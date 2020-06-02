class IndecisionApp extends React.Component {
    render() {
        const title = 'IndecisionApp'
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['option1', 'option2', 'option3']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component
                {this.props.options.map(option => <Option key={option} optionText={option} />)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption component
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))