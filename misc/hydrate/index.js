function begin() {
    let d = new Date()
    const interval = 20 * 60 * 1000

    hydrate()

    $('#time').text(d.toLocaleTimeString())
    $('#message').text('Hydrate when you hear a drink being poured!')

    setInterval(refreshTime, 1000)
    setInterval(hydrate, interval)
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

$(document).ready(begin())