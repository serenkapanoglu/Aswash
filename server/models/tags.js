const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tag: {
    type: String
  }
});

module.exports = mongoose.model('Tag', tagSchema);