const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const employeeSchema = new Schema({
  employeeId: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'employee'],
  },
});

employeeSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

employeeSchema.post('findOneAndDelete', async function (doc, next) {
  try {
    if (doc) {
      await Collection.deleteMany({ userId: doc._id });
    }
    next();
  } catch (error) {
    next(error);
  }
});

employeeSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
