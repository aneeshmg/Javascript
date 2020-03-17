window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual")
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener("click", () => {
            sounds[index].currentTime = 0
            sounds[index].play()
            createBubble(index)
        })
    })

    const createBubble = index => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = `jump 1s ease`
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this)
        })
    }

    const responses = {
        greetings: [
            "I'm good you little piece of something",
            "It's been so boring today",
            "Nobody's ever asked me that",
            "Awww I'm doing great honey"
        ],
        weather: [
            'Weather is fine and dandy',
            'Corona is having a swell day it seems',
            'All glory be to the sunshine'
        ],
        lyrics: [
            'if you had, one chance, one opportunity, to seize everything you ever wanted in one moment, would you capture it or just let it go?',
            'i keep it juicy juicy, i eat that lunch',
            'my anaconda dont want none unless you got buns hon',
            'we dont talk any more, we dont talk anymore, like we used to',
            'i\'ll take you to the candy shop, and let you lick the lollipop',
            'who let the dogs out, who who who',
            'blow a kiss, fire a gun, we need someone to lean on',
            'shamina mina eh eh, waka waka eh eh'
        ],
        default: [
            'Could you repeat that?',
            'W T H are you talking about?',
            'I didn\'t get that'
        ]
    }

    const messageBox = document.getElementById("message")
    const btn = document.querySelector(".talk")

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition()

    recog.onstart = () => console.log("Voice recognition activated.")

    recog.onresult = event => {
        const current = event.resultIndex
        const transcript = event.results[current][0].transcript

        messageBox.innerHTML = `You said: "${transcript}"`

        let message = ``

        if (transcript.includes("how are you")) message = responses.greetings[Math.floor(Math.random() * responses.greetings.length)]
        else if (transcript.includes("sing") || transcript.includes("song")) message = responses.lyrics[Math.floor(Math.random() * responses.lyrics.length)]
        else if (transcript.includes("weather")) message = responses.weather[Math.floor(Math.random() * responses.weather.length)]
        else message = responses.default[Math.floor(Math.random() * responses.default.length)]

        say(message)
    }

    function say(message) {
        const speech = new SpeechSynthesisUtterance()
        speech.text = message
        speech.volume = 1
        speech.rate = 1
        speech.pitch = 1
        speech.voice = getRandomVoice()

        window.speechSynthesis.speak(speech)
    }

    function getRandomVoice() {
        let voices = speechSynthesis.getVoices()
        let randomVoice = voices[Math.floor(Math.random() * voices.length)]
        return randomVoice
    }

    btn.addEventListener("click", () => recog.start())

    document.onkeypress = function (e) {
        e = e || window.event;
        console.log(e.keyCode)
        let sound;

        switch (e.keyCode) {
            case 97: sound = new Audio('./sounds/kick-plain.wav')
                break //A
            case 115: sound = new Audio('./sounds/clap-808.wav') //S
                break
            case 102: sound = new Audio('./sounds/snare-dist02.wav') //D
                break
            case 104: sound = new Audio('./sounds/tom-acoustic02.wav') //F
                break
            case 106: sound = new Audio('./sounds/tom-acoustic01.wav') //J
                break
            case 107: sound = new Audio('./sounds/snare-dist03.wav') //K
                break
            case 108: sound = new Audio('./sounds/kick-plain.wav') //L
                break
            case 116: sound = new Audio('./sounds/hihat-808.wav') //T
                break
            case 32: sound = new Audio('./sounds/crash-tape.wav') //<Space>
                break
            case 105: sound = new Audio('./sounds/snare-smasher.wav') //I
                break
            case 113: sound = new Audio('./sounds/crash-acoustic.wav') //Q
                break
            case 101: sound = new Audio('./sounds/ride-acoustic01.wav') //E
                break
            case 112: sound = new Audio('./sounds/ride-acoustic02.wav') //P
                break
        }

        sound.currentTime = 0
        sound.play()
    };
})
function sequncer() {
    const kick = new Tone.Player('./sounds/kick-plain.wav').toMaster()
    const snare = new Tone.Player('./sounds/snare-dist03.wav').toMaster()
    const clap = new Tone.Player('./sounds/clap-808.wav').toMaster()
    const tom = new Tone.Player('./sounds/tom-acoustic01.wav').toMaster()
    const crash = new Tone.Player('./sounds/crash-tape.wav').toMaster()

    let index = 0

    Tone.Transport.scheduleRepeat(repeat, '8n')
    Tone.Transport.start()

    function repeat() {
        let step = index % 8

        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`)
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`)
        let clapInputs = document.querySelector(`.clap input:nth-child(${step + 1})`)
        let tomInputs = document.querySelector(`.tom input:nth-child(${step + 1})`)
        let crashInputs = document.querySelector(`.crash input:nth-child(${step + 1})`)

        if (kickInputs.checked) kick.start()
        if (snareInputs.checked) snare.start()
        if (clapInputs.checked) clap.start()
        if (tomInputs.checked) tom.start()
        if (crashInputs.checked) crash.start()

        index++
    }

}
sequncer()