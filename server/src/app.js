const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { sequelize } = require('./models');
const confir = require('./config/config');

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
});

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port ${config.port}`);
  });
