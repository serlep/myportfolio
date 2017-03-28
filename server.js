var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/skill', function(req, res) {
  res.render('pages/skill');
});

app.get('/project', function(req, res) {
  res.render('pages/project');
});

app.get('/contact', function(req, res) {
  res.render('pages/contact');
});
app.listen(3000);
console.log('server listen on port 3000!');
