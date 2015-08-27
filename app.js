var express = require('express');
var propsReader = require('properties-reader');
var props = propsReader('version.properties');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world from jenkins!');
});

app.get('/version/', function (req, res) {
  res.send(props.get('version'));
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
