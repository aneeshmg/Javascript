
function initialize() {

    $('#pool').html('')

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

    cards = shuffle(cards)

    let html = cards.reduce((acc, curr) => acc += `<img id=${curr} class='card' src='cards/${curr}.svg'>`, `<div class="hand hhand" data-hand='flow: horizontal; spacing: 1.1; width: 90;'>`)
    html += '</div>'

    $('#pool').append(html)
    $('#header').text('Select any 21 cards by clicking on them cards')

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

function arrangeCards(selectedCards, stage = 0) {
    // Reset the pool
    $('#pool').html('')

    let html = selectedCards.reduce((acc, curr, i) => {
        switch (i % 3) {
            case 0: acc += `<div class="hand row" data-hand='flow: horizontal; spacing: 1.1; width: 90;'>
                                <img id='${curr}-0' class='card' src='cards/${curr}.svg'>`
                break
            case 1: acc += `    <img id='${curr}-1' class='card' src='cards/${curr}.svg'>`
                break
            case 2: acc += `    <img id='${curr}-2' class='card' src='cards/${curr}.svg'>
                            </div><br>`
                break
        }
        return acc
    }, '')
    $('#pool').append(html)

    magic(stage)
}

function magic(stage) {

    $('#header').text('Click on any card in the column your card appears on!')

    $('.hand .card').click(function() {
        let col = parseInt($(this).attr('id').split('-')[1])

        let selectedColCards = []
        $('.hand .card').filter(function() {
            return parseInt(this.id.split('-')[1]) == col
        }).map(function() { selectedColCards.push(this.id.split('-')[0]) })

        let unselectedCards = []
        $('.hand .card').filter(function() {
            return parseInt(this.id.split('-')[1]) != col
        }).map(function() { unselectedCards.push(this.id) })

        let c0 = unselectedCards.filter(e => parseInt(e.split('-')[1]) == 0).map(e => e.split('-')[0])
        let c1 = unselectedCards.filter(e => parseInt(e.split('-')[1]) == 1).map(e => e.split('-')[0])
        let c2 = unselectedCards.filter(e => parseInt(e.split('-')[1]) == 2).map(e => e.split('-')[0])

        let arrangement = []
        if (c0.length == 0) arrangement = c1.concat(selectedColCards, c2)
        else if (c1.length == 0) arrangement = c0.concat(selectedColCards, c2)
        else arrangement = c0.concat(selectedColCards, c1)

        if (stage >= 2) showSelectedCard(arrangement)

        if (stage < 2) arrangeCards(arrangement, ++stage)

    })
}

function showSelectedCard(arrangement) {
    const magicSpell = "Bazzingaa!"

    const card = arrangement[magicSpell.length]

    $('#pool').html(`
        <div class="result">
            <img class='card' src='cards/${card}.svg'></img>
            <h1>This is your card!</h1>
            <button id="play-again">Play again</button>
        </div>
    `)

    $('#header').text(magicSpell)

    $('#play-again').click(function() {
        initialize()
    })
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function Game() {

    initialize()
}

$(document).ready(Game())