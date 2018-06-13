// Dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Connection config
const mc = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'outline_db'
});

// Connect to database
mc.connect();

// Default route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

// Retrieve nodes
app.get('/nodes', function (req, res) {
  mc.query('SELECT * FROM nodes', function(error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Nodes list' });
  });
});

// Retrieve node with id 
app.get('/node/:id', function(req, res) {
  let id = req.params.id;

  if (!id) {
    return res.status(400).send({ error: true, message: 'Please provide id' });
  }
  mc.query('SELECT * FROM nodes WHERE id = ?', id, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results[0], message: 'Nodes list' });
  });
});

// Add a new node
app.post('/node', function(req, res) {

  mc.query('INSERT INTO nodes SET ?', [
    req.body.node_name,
    req.body.node_range_start,
    req.body.node_range_end,
    req.body.node_children
  ], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'New node has been created succesfully!' });
  });
});

// Update node
app.put('/node/:id', function(req, res) {
  let id = req.params.id;

  if (!id) {
    return res.status(400).send({ error: node_name, message: 'Please provide id'});
  }
  mc.query('UPDATE nodes SET node_name = ?, node_range_start = ?, node_range_end = ?, node_children = ? WHERE id = ?', [
    req.body.node_name,
    req.body.node_range_start,
    req.body.node_range_end,
    req.body.node_children,
    id
  ], function(error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Task has been updated succesfully' });
  });
});

// Delete node
app.delete('/node/:id', function(req, res) {
  let id = req.params.id;

  if(!id) {
    return res.status(400).send({ error: true, message: 'Plesase provide id' });
  }
  mc.query('DELETE FROM nodes WHERE id = ?', [id], function(error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Node has been updated succesfully.' });
  });
});

// Port set to 8080 for incoming http requests
app.listen(8080, function() {
  console.log('Listening on port 8080');
});