const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const test = require('./controller/test');

const Product = require('./models/product');

/**
 *  Router File Import
 */

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const productRoutes = require('./routes/product');
const productBrandRoutes = require('./routes/product-brand');
const productCategoryRoutes = require('./routes/product-category');


const app = express();
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))

app.use('/api', test);
app.use('/api/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/brand', productBrandRoutes);
app.use('/api/product-category', productCategoryRoutes);



app.get('/', function (req, res) {
    res.send('hello world')
  })
console.log(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=${process.env.AUTH_SOURCE}`,)

mongoose.connect(
  `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=${process.env.AUTH_SOURCE}`,
  // `mongodb://localhost:27017/${process.env.DB_NAME}`,
  {
      useNewUrlParser: true,
      // useFindAndModify: false,
      // useUnifiedTopology: true,
      // useCreateIndex: true
  }
)
  .then(() => {
      const port = process.env.PORT || 3000;
      app.listen(port, () => console.log(`Server is running at port:${port}`));
      console.log('Connected to mongoDB');

  })
  .catch(err => {
      console.error('Oops! Could not connect to mongoDB Cluster0', err);
  })
  

