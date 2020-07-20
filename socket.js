const socketIO = require('socket.io');
const socket = {};

function connection(server) {
    socket.io = socketIO(server);
}

module.exports = {
    connection,
    socket
}