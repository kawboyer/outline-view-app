// Express dependencies
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
const cors = require('cors')

const app = require('express')()
// const server = require('http').createServer(app)
// const io = require('socket.io')(server)
const PORT = process.env.PORT || 8081

app.use(cors())
app.use(express.static('./server/dist'))
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// // Websocket
// io.on('connection', function (socket) {
//   socket.emit('request', )
//   socket.on('reply', function() {

//   })
// })

// Database connection config
const db = mysql.createConnection({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DB
})

// Connect to database
db.connect()

// Default route to connect with Vue.js index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'))
})

// Retrieve nodes
app.get('/nodes', function (req, res) {
  db.query('SELECT * FROM nodes', function(error, results, fields) {
    if (error) {
      return res.status(404).send('404 Error')
    }
    return res.send({ data: results })
  })
})

// Retrieve node with id 
app.get('/nodes/:id', function(req, res) {
  let id = req.params.id

  if (!id) {
    return res.status(400).send({ error: true, message: 'Please provide id' })
  }
  db.query('SELECT * FROM nodes WHERE id = ?', id, function (error, results, fields) {
    if (error) {
      return res.status(404).send('404 Error')
    }
    return res.send({ data: results[0] })
  })
})

// Add a new node
app.post('/nodes', function(req, res) {
  db.query('INSERT INTO nodes SET ?', [
    req.body.node_name,
    req.body.node_range_start,
    req.body.node_range_end,
    req.body.node_children
  ], function (error, results, fields) {
    if (error) {
      return res.status(404).send('404 Error');
    }
    return res.send({ data: results, message: 'New node has been created' })
  })
})

// Update node with id
app.put('/nodes/:id', function(req, res) {
  let id = req.params.id;

  if (!id) {
    return res.status(400).send({ error: node_name, message: 'Please provide id'})
  }
  db.query('UPDATE nodes SET node_name = ?, node_range_start = ?, node_range_end = ?, node_children = ? WHERE id = ?', [
    req.body.node_name,
    req.body.node_range_start,
    req.body.node_range_end,
    req.body.node_children,
    id
  ], function(error, results, fields) {
    if (error) {
      return res.status(404).send('404 Error')
    }
    return res.send({ data: results, message: 'Node has been updated' })
  });
});

// Delete node with id
app.delete('/nodes/:id', function(req, res) {
  let id = req.params.id;

  if(!id) {
    return res.status(400).send({ error: true, message: 'Plesase provide id' })
  }
  db.query('DELETE FROM nodes WHERE id = ?', [id], function(error, results, fields) {
    if (error) {
      return res.status(404).send('404 Error')
    }
    return res.send({ data: results, message: 'Node has been deleted' })
  });
});

// Port for incoming http requests
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
});
