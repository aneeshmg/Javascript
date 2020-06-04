function begin(hInterval = 20 * 60 * 1000, mInterval = 37 * 60 * 1000) {
    let d = new Date()
    const hydrationInterval =  hInterval // 20 minutes - parameterize this?
    const movementInterval =  mInterval // 30 minutes

    hydrate()

    $('#time').text(d.toLocaleTimeString())
    $('#message').text('Hydrate when you hear a drink being poured!')

    setInterval(refreshTime, 1000)
    setInterval(hydrate, hydrationInterval)
    setInterval(moveAround, movementInterval)
}

function refreshTime() {
    let d = new Date()
    $('#time').text(d.toLocaleTimeString())
}

function hydrate() {
    const sound = new Howl({
        src: ['./pour.mp3']
    })

    alert("Drink water!")

    sound.play()
}

function moveAround() {
    const sound = new Howl({
        src: ['./gong.mp3']
    })

    alert("Look away, take a walk, move!")

    sound.play()
}

$(document).ready(function () {
    begin()

    $('#h-interval').click(function() {
        let oldInterval = parseInt($('#h-interval').text())
        let newInterval = prompt("Enter new interval:", oldInterval)
        let temp = parseInt($('#m-interval').text())

        $('#h-interval').text(newInterval)

        begin(newInterval * 60 * 1000, temp * 60 * 1000)
    })

    $('#m-interval').click(function() {
        let oldInterval = parseInt($('#m-interval').text())
        let newInterval = prompt("Enter new interval:", oldInterval)
        let temp = parseInt($('#h-interval').text())

        $('#m-interval').text(newInterval)

        begin(temp * 60 * 1000, newInterval * 60 * 1000)
    })
})