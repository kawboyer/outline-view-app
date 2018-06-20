// Dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const routes = require('./server/routes/routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var PORT = process.env.PORT || 8081;

// Default route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

// Start the server
app.listen(process.env.PORT || 8081, function() {
  console.log('Listening on port 8081');
});
