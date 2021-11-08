const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const test = require('./controller/test');

/**
 *  Router File Import
 */

 const userRoutes = require('./routes/user');

const app = express();
app.use(cors());

app.use('/api', test);

app.use('/user', userRoutes);

// app.get('/', function (req, res) {
//     res.send('hello world')
//   })
  
  app.listen(3000)
