import React from 'react'

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

export default Action