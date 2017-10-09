## A simple server to mimic authorization with handshake
* ``GET /`` responds with 'Welcome..'
* ``GET /handshake`` responds with an odd number in JSON
* ``GET /login/:num`` accepts the num & responds with success message only if the supplied number has one 2 as its factor else responds with 401 - Unauthorized