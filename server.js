// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('/status', (req, res) => {
  res.send({
    messsage: 'hello world'
  })
})

app.listen(process.env.PORT || 8080)


// // Dependencies
// const http = require('http');
// const express = require('express');
// const socketIo = require('socket.io');

// const app = express();

// app.get('/', (req, res) => res.send("Hello World"));

// const server = http.Server(app);
// server.listen('Server listening on port: ' + 3000);

// // const io = socketIo(server);

// // io.on('connection', (socket) => {
// //   socket.emit('hello', {
// //     greeting: 'Hello Paul'
// //   });
// // });