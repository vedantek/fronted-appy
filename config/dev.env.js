var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    SERVER_URI: '"http://localhost:8090"',
    WEBSOCKET_URI: '"ws://localhost:8090"',
    APP_URI: '"http://localhost:3000"'
        // APP_URI: '"https://appyapp.io"'
})