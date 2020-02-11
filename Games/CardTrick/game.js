

function initialize() {
    console.log('Initializing...')


    let cards = [
        '10C',
        '10D',
        '10H',
        '10S',
        '2C',
        '2D',
        '2H',
        '2S',
        '3C',
        '3D',
        '3H',
        '3S',
        '4C',
        '4D',
        '4H',
        '4S',
        '5C',
        '5D',
        '5H',
        '5S',
        '6C',
        '6D',
        '6H',
        '6S',
        '7C',
        '7D',
        '7H',
        '7S',
        '8C',
        '8D',
        '8H',
        '8S',
        '9C',
        '9D',
        '9H',
        '9S',
        'AC',
        'AD',
        'AH',
        'AS',
        'JC',
        'JD',
        'JH',
        'JS',
        'KC',
        'KD',
        'KH',
        'KS',
        'QC',
        'QD',
        'QH',
        'QS',
        'TC',
        'TD',
        'TH',
        'TS'
    ]

    let html = cards.reduce((acc, curr) => acc += `<img id=${curr} class='card' src='cards/${curr}.svg'>`, `<div class="hand hhand" data-hand='flow: horizontal; spacing: 1.1; width: 90;'>`)
    html += '</div>'
    // TODO: Shuffle cards here

    $('#pool').append(html)

    selectCards()

}

function selectCards() {

    let selectedCards = []

    $('#pool .card').click(function() {
        let id = $(this).attr('id')
        selectedCards.push(id)

        $(this).remove()

        if (selectedCards.length == 21)
            arrangeCards(selectedCards)
    })
}

function arrangeCards(selectedCards) {
    // Reset the pool
    $('#pool').html('')

    let html = selectedCards.reduce((acc, curr, i) => {
        let row = ''
        switch (i) {
            case 0: row = 'r0'
                break
            case 7: row = 'r1'
                break
            case 14: row = 'r2'
                break
        }
        if (i % 7 == 0) acc += `<div class="hand vhand-compact" id='${row}'>`

            acc += `<img id='${curr}' class='card' src='cards/${curr}.svg'>`
        if (i == 6 || i == 13 || i == 20) acc += '</div>'
        return acc
    }, '<div>')

    html += '</div>'
    $('#pool').append(html)

    $('#header').text('Click on the row your card appears on!')

    $('.vhand-compact').click(function() {
        let row = $(this).attr('id')
        let selectedRowCards = []
        $(`#${row} img`).map(function() { selectedRowCards.push(this.id) })
        console.log(selectedRowCards)
    })

}

// function selectionOne()

function Game() {

    initialize()


}

$(document).ready(Game())