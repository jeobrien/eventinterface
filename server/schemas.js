var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  occasion: String,
  invited_count: Number,
  date: Date
});