const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { handleSocketConnection } = require('./socket');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', handleSocketConnection);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
