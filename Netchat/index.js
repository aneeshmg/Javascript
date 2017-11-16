'use strict'
process.stdout.write("\u001B[2J\u001B[0;0f")
const PORT = 9000
let counter = 0
let sockets = {}

const server = require("net").createServer()

server.on("connection", socket => {
    socket.id = counter++
    sockets[socket.id] = socket

    console.log("Client connected..")
    socket.write("Welcome fella\n")

    socket.on("data", data => {
        Object.entries(sockets).forEach(([/*key*/, element]) => {
            element.write(`${socket.id}: `)
            element.write(data)
        })
    })

    socket.on("end", () => {
        delete sockets[socket.id]
        console.log("Client disconnected..")
    })
})

server.listen(PORT, () => {
    console.log("Server started..")
})