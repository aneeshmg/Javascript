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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleSubmit}>
                    <input className="add-option__input" name="option" type="text"></input>
                    <button className="button">Add</button>
                </form>
            </div>
        )
    }
}