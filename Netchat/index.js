'use strict'
process.stdout.write("\u001B[2J\u001B[0;0f")
const PORT = 9000
let counter = 0
let sockets = {}

const server = require("net").createServer()

const timestamp = () => {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes()}`
}

server.on("connection", socket => {
    socket.id = counter++

    console.log("Client connected..")
    socket.write("Please type your name fella: ")

    socket.on("data", data => {
        if(!sockets[socket.id]) {
            socket.name = data.toString().trim()
            socket.write(`Welcome ${socket.name}\n`)
            sockets[socket.id] = socket
            return
        }
        Object.entries(sockets).forEach(([key, element]) => {
            if(socket.id == key) return
            element.write(`${socket.name}: ${timestamp()} `)
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