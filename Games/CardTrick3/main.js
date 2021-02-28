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
    $('#header').text('The cards below were ordered by shuffling a deck of cards and then dealing them out. Click on any card in the first row. Whatever number is on this card move this many cards to the right and click the new card, treating Ace as a 1 and face cards as 5, and wrapping around to the left side of the next row. Repeat from the card just clicked. I magically know that you will (usually) end up on the \'trap\' card, indicated by a thick green border. Refresh page to play again.')
    $('#note').text('The clicked cards get highlighted in black so you can keep track when you count')
    $('#knowmore').text('Want to know more? Google \'Kruskal\'s count\'')

    let newArrangement = shuffle(cards)
    showCards(newArrangement)

    magic(newArrangement)
}

function Game() {

    initialize()
}

function magic(arrangement) {
    let shazam = {}
    for (let i = 0; i < 15; i++) shazam[arrangement[i]] = null

    for (let i = 0; i < 15; i++) {
        let currentCard = arrangement[i]
        while (getCount(currentCard) + arrangement.indexOf(currentCard) < cards.length) {
            currentCard = arrangement[arrangement.indexOf(currentCard) + getCount(currentCard)]
        }
        shazam[arrangement[i]] = currentCard
    }

    let result = findResult(shazam)

    document.getElementById(result).style.cssText = 'border: 7px outset lime; margin: 10px; padding-top: 0; width: 90px';
}

function getCount(card) {
    if (card.length > 2) return parseInt(card.split('').splice(0, card.length - 1).join(''))
    else if (isFaceCard(card))
        return 5
    else if (card[0] === 'T')
        return 10
    else if (card[0] === 'A')
        return 1
    else return parseInt(card[0])
}

function isFaceCard(card) {
    if (card[0] === 'J' || card[0] === 'K' || card[0] === 'Q')
        return true
    else return false
}

function findResult(magic) {
    let shazam = {}
    let whatIsThis = Object.values(magic)
    for (let i = 0; i < whatIsThis.length; i++)
        shazam[whatIsThis[i]] = shazam[whatIsThis[i]] === undefined ? 0 : shazam[whatIsThis[i]] + 1
    let max = -1
    for (const what in shazam) {
        if (max < shazam[what]) {
            max = parseInt(shazam[what])
            whatIsThis = what
        }
    }
    return whatIsThis
}

function showCards(cards) {
    let html = cards.reduce((acc, curr) => acc += `<img id=${curr} class='card' src='cards/${curr}.svg' style="margin: 10px; padding-top:0;" onclick="toggle(this)">`, `<div class="hand hhand" data-hand='flow: horizontal; spacing: 1; width: 90;'>`)
    html += '</div>'

    $('#pool').html(html)

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

function toggle(e) {
    if (document.getElementById(e.id).style.cssText.includes('border')) {
        document.getElementById(e.id).style.cssText = 'margin: 10px; padding-top: 0; width: 90px';
    } else {
        document.getElementById(e.id).style.cssText = 'border: 5px solid black; margin: 10px; padding-top: 0; width: 90px';
    }
}

$(document).ready(Game())
