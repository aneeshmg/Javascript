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
})