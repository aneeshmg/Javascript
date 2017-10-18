const http = require('http');

const url = 'http://localhost:3000'

let handshake = () => {
    return new Promise((resolve, reject) => {
        http.get(`${url}/handshake`, (resp) => {
            let data = ''

            resp.on('data', (chunk) => {
                data += chunk;
            })

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data)
            })

        }).on("error", (err) => {
            reject(new Error(err))
        })
    })
}

let login = (number) => {

    return new Promise((resolve, reject) => {
        http.get(`${url}/login/${number}`, (resp) => {
            let data = ''

            resp.on('data', (chunk) => {
                data += chunk;
            })

            // The whole response has been received.
            resp.on('end', () => {
                resolve(data)
            })

        }).on("error", (err) => {
            reject(new Error(err))
        })
    })

}

// Simple named lambda function which returns anything sent to it
let anotherAfterLogin = message => message

/* Calling them individually */
// handshake()
//     .then(res => console.log('handshake success', res))
//     .catch(err => console.log('handshake error', err))

// login(10)
//     .then(res => console.log('success login', res))
//     .catch(err => console.log('login failed', err))


handshake().then(handshakeResponse => {
    const token = JSON.parse(handshakeResponse).number * 2
    return login(token)
}).then(loginResponse => {
    return anotherAfterLogin(loginResponse)
}).then(finalMessage => {
    console.log(finalMessage)
})