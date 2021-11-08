const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', function (req, res) {
    res.send('hello world')
  })
  
  app.listen(3000)
