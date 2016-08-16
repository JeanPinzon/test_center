(function () {
  'use strict';

  var EmailService = require('../core/email/EmailService');
  var emailService = new EmailService();

  var TestService = require('./TestService');
  var testService = new TestService();

  module.exports = function (app) {

    var controller = {};

    controller.send = function (req, res) {
      var html = testService.buildResult(req.body);
      emailService.send(html);
      res.json({ valid: true, html: html });
    };

    controller.preview = function (req, res) {
      var html = testService.buildResult(req.body);
      res.json({ valid: true, html: html });
    };

    controller.getLevel = function(req, res) {
      var test = testService.validate(req.body);
      res.json({ valid: true, level: test.level });
    };

    return controller;
  };
})();
