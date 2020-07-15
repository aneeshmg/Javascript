import React from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }

    handleDeleteOption = optionToRemove => {
        this.setState(prevState => ({
            options: prevState.options.filter(option => optionToRemove !== option)
        }))
    }

    handleClick = () => {
        const rand = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[rand]
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleOption = option => {
        if (!option)
            return `Enter valid option`
        else if (this.state.options.indexOf(option) > -1)
            return `Option already present`

        this.setState(previousState => ({
                options: previousState.options.concat(option)
            }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
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
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handleClick={this.handleClick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleOption={this.handleOption}/>
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}