/* Simple server to be used for understanding promises */

// Instantiating 'app' using currying!
const app = require("express")()
const handlers = require("./handlers")

app.get("/", handlers.welcome)
app.get("/_status", handlers._status)
app.get("/handshake", handlers.handshake)
app.get("/login/:num", handlers.login)

app.listen(3000)

module.exports = app