const cards = [
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


function initialize() {

    $('#pool').html('')

    let sampleCards = shuffle(cards)
    sampleCards = sampleCards.slice(1, 21)
    showCards(sampleCards, 'Select any 1 card and keep it in your mind. Click when ready!')

    magic(sampleCards)
}

function Game() {

    initialize()
}

function showCards(cards, message) {
    let html = cards.reduce((acc, curr) => acc += `<img id=${curr} class='card' src='cards/${curr}.svg'>`, `<div class="hand hhand" data-hand='flow: horizontal; spacing: 1.1; width: 90;'>`)
    html += '</div>'

    $('#pool').html(html)
    $('#header').text(message)

    return
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function playAgain() {
    $('#pool').click(initialize)
}

function magic(sampleCards) {

    $('#pool').click(function() {
        let newCards = cards.filter(e => !sampleCards.includes(e))
        newCards = newCards.slice(1, 21)

        showCards(newCards, 'Your card has vanished! Click to play again')

        playAgain()
    })
    
}

$(document).ready(Game())