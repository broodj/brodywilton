//jshint esversion:6

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
// const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.listen(process.env.PORT, function(){
  console.log('Server started on port: ');
});

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/portfolio', function(req, res){
  res.render('portfolio');
});

app.get('/contact', function(req, res){
  res.render('contact');
});
