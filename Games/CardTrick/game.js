

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

    let html = cards.reduce((acc, curr) => acc += `<img id=${curr} class='card' src='cards/${curr}.svg'>`, '')
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

        if (selectedCards.length == 3)
            arrangeCards(selectedCards)
    })
}

function arrangeCards(selectedCards) {
    // Reset the pool
    $('#pool').html('')

    let html = selectedCards.reduce((acc, curr, i) => {
        switch (i % 3) {
            case 0: acc += ``
            case 1: acc += ``
            case 2: acc += ``
        }
    }, '')


    $('#pool').append(html)

}

function Game() {

    initialize()


}

$(document).ready(Game())