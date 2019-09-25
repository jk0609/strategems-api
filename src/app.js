const express = require('express');
require('dotenv').config();

// Mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', function() {
  console.log('connected to MongoDB')
});

const app = express();
require('./routes')(app);

module.exports = app;