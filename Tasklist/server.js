const EventEmitter = require("events")

class Server extends EventEmitter {
    constructor(client) {
        super()
        this.tasks = {}
        this.taskId = 1
        process.nextTick(() => {
            this.emit("response", "Type a command (help to list commands)")
        })

        client.on("command", (command, args) => {
            switch (command) {
                case "help":
                case "add":
                case "delete":
                case "ls":
                    this[command](args)
                    break
                default:
                    this.emit("response", "Unknown command...")
            }
        })
    }

    help() {
        this.emit("response", `Available commands:
        add <task>
        ls
        delete
        `)
    }

    add(args) {
        this.tasks[this.taskId] = args.join(" ")
        this.emit("response", `Added task ${this.taskId}`)
        this.taskId++
    }

    delete(args) {
        delete(this.tasks[args[0]])
        this.emit("response", `Deleted task ${args[0]}`)
    }

    ls() {
        this.emit("response", `Tasks:\n${this.tasksString()}`)
    }

    tasksString() {
        return Object.keys(this.tasks).map(key => {
            return `${key} : ${this.tasks[key]}`
        }).join("\n")
    }
}

module.exports = client => new Server(client)