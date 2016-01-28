// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');

// configuration ===========================================

// set our port
var port = process.env.PORT || 3000;

mongoURI = process.env.MONGOLAB_URI || 'mongodb://mongodb://127.0.0.1:27017/events';

// connect to mongoDB database 
mongoose.connect(mongoURI); 

app.use(bodyParser.json()); 

app.use(bodyParser.json({ type: 'application/json' })); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location
app.use(express.static(__dirname + '/../client'));

// routes ==================================================
require('./routes')(app); // configure our routes

// start app ===============================================
// startup app at http://localhost:8080
app.listen(port);               

console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;                         
