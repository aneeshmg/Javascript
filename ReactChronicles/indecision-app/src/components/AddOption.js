import React from 'react'

export default class AddOption extends React.Component {

    state = {
        error: undefined
    }

    handleSubmit = e => {
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