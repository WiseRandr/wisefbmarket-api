const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  name: String,
  idRef: Number,
  sign: String
});
