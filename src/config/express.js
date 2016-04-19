(function () {
  'use strict';

  var http = require('http');
  var express = require('express');
  var load = require('express-load');
  var bodyParser =  require('body-parser');
  var methodOverride = require('method-override');
  var helmet = require('helmet');

  var appFolder = './app';
  var publicFolder = './public';

  module.exports = function () {

    var app = express();


    app.set('views', appFolder + '/views');
    app.set('view engine', 'ejs');
    app.set('port', 3000);

    app.use(express.static(publicFolder));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(helmet());

    load('models', { cwd: 'app' })
      .then('controllers')
      .then('routes')
      .into(app);

    app.get('/', function (req, res) {
      res.render('home');
    });

    app.get('*', function (req, res) {
      res.status(404).render('404');
    });

    return app;
  };

})();
