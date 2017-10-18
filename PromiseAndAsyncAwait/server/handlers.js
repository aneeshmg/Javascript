const welcome = (req, res) => {
    res.send("Working...")
}

const _status = (req, res) => {
    res.send("Service online.")
}

const handshake = (req, res) => {
    let num = parseInt(Math.random() * 100)
    // Send odd number
    const response = {
        number: num % 2 == 0 ? num + 1 : num
    }
    res.json(response)
}

const login = (req, res) => {
    // Condition to ensure the 'num' has only one 2 as a factor (which is to be supplied by the client!)
    if (req.params.num % 2 == 0 && (req.params.num / 2) % 2 != 0)
        res.json({
            msg: "Success"
        })
    else
        res.sendStatus(401)
}

module.exports = {
    welcome: welcome,
    login: login,
    _status: _status,
    handshake: handshake
}