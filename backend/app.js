require('dotenv').config();

const express = require('express');

const app = express();
const HttpError = require('./models/http-error');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users-routes');
const itemRoutes = require('./routes/item-routes');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/users', userRoutes);
app.use('/products', itemRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

const url = process.env.DATABASE_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log('%c Connected to MongoDB', 'color: green; font-weight: bold;');
    app.listen(4000);
  })
  .catch((err) => {
    console.log('%c Connection failed', 'color: red; font-weight: bold;');
    console.log(err);
  });
