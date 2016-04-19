(function () {
  'use strict';

  var http = require('http');
  var express = require('express');
  var app = express();

  var appFolder = './app';
  var publicFolder = './public';

  app.use(express.static(publicFolder));

  app.set('views', appFolder + '/views');
  app.set('view engine', 'ejs');

  app.get('/', function (req, res) {
    res.render('home');
  });

  http.createServer(app).listen(8000, function () {
    console.log("Servidor rodando no endereço http://localhost:8000");
  });
})();
