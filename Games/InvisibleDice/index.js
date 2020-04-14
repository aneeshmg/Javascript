"use strict";

const init = () => {

    const message = `Roll your imaginary pair of dice!`
    $('#message-box').text(message)
    $('#done').text('Done')

    $('#done').click(() => {
        const message = `Pick the larger of the two numbers (either if equal) and multiply it by 2.`
        $('#message-box').text(message)
        stageTwo()
    })
}

const stageTwo = () => {
    $('#done').click(() => {
        const magic = Math.floor(Math.random() * 10 + 1)
        const message = `Add ${magic} to the result.`
        $('#message-box').text(message)
        stageThree(magic)
    })
}

const stageThree = magic => {
    $('#done').click(() => {
        const message = `Multiply the result by 5 and add the number on the unselected die to it.`
        $('#message-box').text(message)
        stageFour(magic)
    })
}

const stageFour = magic => {
    $('#done').click(() => {
        const message = `Type your result here: `
        const inputBox = `<br><br><input type='number' id='user' placeholder="Result number">`
        $('#message-box').text(message)
        $('#message-box').append(inputBox)
        reveal(magic)
    })
}

const reveal = magic => {
    const input = $('#user')
    $('#done').click(() => {
        const message = `Your dice show:`
        const number = parseInt(input.val())
        const bazzinga = number - (5 * magic)
        const firstDie = Math.floor(bazzinga / 10)
        const secondDie = bazzinga % 10
        showDice(firstDie, secondDie)
    })
}

const showDice = (first, second) => {
    if (first < 1 || second < 1 || first > 6 || second > 6) init()
    else {
        const message = `<div class="dice">
                            <div class="die" id="die-1">${first}</div>
                            <div class="die" id="die-2">${second}</div>
                        </div>`
        $('#message-box').html(message)
        $('#done').text("Play again")
    }

    $('#done').click(init)
}

$(document).ready(init)