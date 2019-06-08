const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  roleId: Number,
  isActive: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;
