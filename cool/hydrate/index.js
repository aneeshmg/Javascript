function begin() {
    let d = new Date()
    const hydrationInterval = 20 * 60 * 1000 // 20 minutes - parameterize this?
    const movementInterval = 37 * 60 * 1000 // 30 minutes

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

$(document).ready(begin())