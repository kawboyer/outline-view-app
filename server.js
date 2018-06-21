// Dependencies
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const PORT = process.env.PORT || 8081;

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('User connected')

  socket.on('change color', (color) => {
    console.log('Color Changed to: ', color)
    io.sockets.emit('change color', color)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// app.use(cors());
// app.use(express.static('public'));
// app.use(morgan('combined'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// Default route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
});
