var express = require('express');
var path = require('path');
var event = require('./eventController');
var bodyParser = require('body-parser');
var app = express();
var rootPath = path.normalize(__dirname + "/../");

app.use(express.static(rootPath + '/app'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/data/event/:id', event.get);
app.post('/data/event/:id', event.save);

app.listen(9000);
console.log('Listening on port 9000');