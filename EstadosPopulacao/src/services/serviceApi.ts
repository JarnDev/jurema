const jayson = require('jayson')

const client = jayson.client.http('http://localhost:3001/populacao');

export default client;