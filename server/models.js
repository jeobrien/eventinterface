var mongoose = require('mongoose');
var eventSchema = require('./schemas');

module.exports = mongoose.model('Event', eventSchema);