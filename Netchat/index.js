'use strict'
process.stdout.write("\u001B[2J\u001B[0;0f")
const PORT = 9000

const server = require("net").createServer()

server.on("connection", socket => {
    console.log("Client connected..")
    socket.write("Welcome fella\n")

    socket.on("data", data => {
        console.log(`data: ${data}`)
        socket.write(data)
    })

    socket.on("end", () => {
        console.log("Client disconnected..")
    })
})

server.listen(PORT, () => {
    console.log("Server started..")
})