const EventEmitter = require("events")

class Server extends EventEmitter {
    constructor(client) {
        super()
        process.nextTick(() => {
            this.emit("response", "Type a command (help to list commands)")
        })

        client.on("command", command => {
            switch (command) {
                case "help":
                case "add":
                case "delete":
                case "ls":
                    this[command]()
                    break
                default:
                    this.emit("response", "Unknown command...")
            }
        })
    }

    help() {
        this.emit("response", 'help...')
    }

    add() {
        this.emit("response", 'add...')
    }

    delete() {
        this.emit("response", 'delete...')
    }

    ls() {
        this.emit("response", 'ls...')
    }
}

module.exports = client => new Server(client)