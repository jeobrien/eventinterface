var Event = require('./models');
var request = require('request');
var mongoose = require('mongoose');

  module.exports = function(app) {

    app.get('/api/events', function (req, res) {
      Event.find(function(err, events) {
        if (err) {
          res.send(err);
        }
        res.json(events);
      });
    });

    app.post('/api/delete', function (req, res) {
      Event.find({occasion: req.body.title}).remove(function (err, data) {
        if (err) {
          res.json(err);
        } else {
          Event.find(function(err, events) {
            if (err) {
              res.send(err);
            }
            res.json(events);
          });
        }
      });
    });

    app.post('/api/events', function (req, res) {
      var event = new Event({
        occasion: req.body.title,
        invited_count: req.body.guests,
        date: req.body.date
      });
      event.save(function (err, data) {
        if (err) {
          res.json(err);
        } else {
          Event.find(function(err, events) {
            if (err) {
              res.send(err);
            }
            res.json(events);
          });
        }
      });
    });
  };