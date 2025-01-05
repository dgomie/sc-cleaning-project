const { Schema, model } = require('mongoose');

const packageSchema = new Schema({
  package: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Package = model('Package', packageSchema);

module.exports = Package;
