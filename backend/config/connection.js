require('dotenv').config();
const mongoose = require('mongoose');

const dbUri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/PokeTrack';

mongoose.connect(dbUri)
  .then(() => {
    console.log('Connected successfully to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connection to MongoDB is open');
});

module.exports = db;