const { Schema, model } = require('mongoose');

const packageSchema = new Schema({
  package: {
    type: String,
    required: true,
    enum: ['standard', 'deep-cleaning', "move-in/out"],
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  recurring: {
    type: Boolean,
    required: true,
    default: false
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  scheduledDate: {
    type: Date,
    required: true
  }
});



const Package = model('Package', packageSchema);

module.exports = Package;
