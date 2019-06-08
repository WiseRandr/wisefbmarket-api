const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  nameId: String,
  descritpion: String,
  price: String,
  currencyIdRef: Number,
  groupeTypeId: Number,
  imageBase64: String
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
