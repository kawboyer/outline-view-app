import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8081' || 'https://outline-app.herokuapp.com/');

function displayNodes(cb) {
  socket.on('node', cb);
  socket.emit('displayNodes');
}

function addNodeDetails(details) {
  socket.emit('addNodeDetails', { details });
}

export {
  displayNodes,
  addNodeDetails,
};