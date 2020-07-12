import React from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'

export default class IndecisionApp extends React.Component {

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