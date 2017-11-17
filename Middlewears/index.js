// Example of writing/using middlewears, as a concept (crude)

let logger = (err, text, next) => {
    console.log("calling logger")
    if (err) next(err)
    else {
        console.log("Logging what needs to be logged", text)
        if(next) next(null, text/*, next-middlewear*/) // Pass it on if another middlewear is included
    }
}

let getText = next => {
    console.log("calling getText")
    try {
        const text = require("./text")
        next(null, text, logger) // logger injected as middlewear
    } catch (e) {
        next(e)
    }
}

let capitalize = (err, text, next) => {
    console.log("calling capitalize")
    if (err) next(err)
    else {
        try {
            const t = text.toUpperCase()
            next(null, t)
        } catch (e) {
            next(e)
        }
    }
}

getText(capitalize)