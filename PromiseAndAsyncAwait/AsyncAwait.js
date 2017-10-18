const http = require('http')
const request = require('request-promise-native')

const url = 'http://localhost:3000'

async function getToken() {
    // await will wait for the response
    handshakeResponse = await request(`${url}/handshake`)
    console.log(handshakeResponse)
    loginResponse = await request(`${url}/login/${JSON.parse(handshakeResponse).number * 2}`)
    console.log(loginResponse)
    return loginResponse
}

const response = getToken()
// This wont work - gets called in async
console.log(response)