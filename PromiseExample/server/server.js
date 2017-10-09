/* Simple server to be used for understanding promises */

// Instantiating 'app' using currying!
const app = require('express')()

app.get('/', (req, res) => {
    res.send('Working...')
})
app.get('/handshake', (req, res) => {
    let num = parseInt(Math.random() * 100)
    // Send odd number
    res.json({num: num % 2 == 0? num + 1 : num})
})
app.get('/login/:num', (req, res) => {
    // Condition to ensure the 'num' has only one 2 as a factor (which is to be supplied by the client!)
    if(req.params.num % 2 == 0 && (req.params.num / 2) % 2 != 0)
        res.json({msg:"Success"})
    else 
        res.sendStatus(401)
})


app.listen(3000)