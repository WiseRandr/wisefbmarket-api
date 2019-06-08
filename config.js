/**
 * Configuration and Global variables
 *
 * Initialize variable for environements
 *
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fbmarket', {
  useNewUrlParser: true
});
