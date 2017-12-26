const express = require('express');
const authRoutes = require('./routes/auth-routes');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb');
});

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('homepage');
});

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});

