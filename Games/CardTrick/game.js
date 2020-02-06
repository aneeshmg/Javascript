

function initialize() {
    let $container = document.getElementById('container')
    let arena = document.getElementById('arena')

    let deck = Deck()
    deck.mount($container)

    deck.shuffle()
    deck.bysuit()
    deck.flip()

    console.log(deck.cards[0])

    $container.addEventListener("click", function(e) {
        console.log(e)
    })

    deck.cards.forEach(card => {
        card.enableDragging()

        
    })
    console.log(deck)

    // console.log($container)


    console.log(deck.$el)
}

function Game() {

    initialize()


}

Game()