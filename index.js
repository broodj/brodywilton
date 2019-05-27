//jshint esversion:6

const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.listen(port, function(){
  console.log('Server started on port: ' + port);
});

app.get('/', function(req, res){
  res.render('home');
});