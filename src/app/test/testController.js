(function () {
  'use strict';

  module.exports = function (app) {

    var controller = {};

    controller.saveTest = function (req, res) {
      var result = buildResult(req.body);
      sendEmail(result);
      res.json({ ok: true });
    };

    var sendEmail = function(result) {
      var email = require("emailjs");
      var server = email.server.connect({
         user: "rafaeldeoliveirabenetti@gmail.com",
         password: "orrardgdrdr*google",
         host: "smtp.gmail.com",
         ssl: true
      });

      console.log(result);

      var message = {
         text: "I hope this works",
         from: "Sistema de Correções <rafaeldeoliveirabenetti@gmail.com>",
         to: "someone <rafaelbenetti@cwi.com.br>, another <rafaeldeoliveirabenetti@gmail.com",
         subject: "Prova Técnica .NET",
         attachment:
         [
            { data:result, alternative:true }
         ]
      };

      server.send(message, function(err, message) { console.log(err || message); });
    };

    var validateTest = function(test) {
      return "Júnior 2";
    };

    var buildResult = function(test) {

      var fs = require('fs');
      var html = fs.readFileSync('./templates/email/index.html', 'utf8');
      test.level = validateTest(test);
      html = html.replace("[CANDIDATE_NAME]", test.name)
                 .replace("[CANDIDATE_LEVEL]", test.level)

                 .replace("[OO.NOTE]", test.quality.oo.note)
                 .replace("[OO.DESCRIPTION]", test.quality.oo.description)
                 .replace("[INTELLIGENCE.NOTE]", test.quality.intelligence.note)
                 .replace("[INTELLIGENCE.DESCRIPTION]", test.quality.intelligence.description)
                 .replace("[EXCEPTION_HANDLIND.NOTE]", test.quality.exceptionHandling.note)
                 .replace("[EXCEPTION_HANDLIND.DESCRIPTION]", test.quality.exceptionHandling.description)
                 .replace("[DUPLICATED_CODE.NOTE]", test.quality.duplicatedCode.note)
                 .replace("[DUPLICATED_CODE.DESCRIPTION]", test.quality.duplicatedCode.description)
                 .replace("[AUTOMATED_TESTS.NOTE]", test.quality.automatedTests.note)
                 .replace("[AUTOMATED_TESTS.DESCRIPTION]", test.quality.automatedTests.description)

                 .replace("[INPUT_FORMAT.NOTE]", test.maintainability.inputFormat.note)
                 .replace("[INPUT_FORMAT.DESCRIPTION]", test.maintainability.inputFormat.description)
                 .replace("[ADD_OPERATORS.NOTE]", test.maintainability.addOperators.note)
                 .replace("[ADD_OPERATORS.DESCRIPTION]", test.maintainability.addOperators.description)
                 .replace("[ALTER_OUTPUT.NOTE]", test.maintainability.alterOutput.note)
                 .replace("[ALTER_OUTPUT.DESCRIPTION]", test.maintainability.alterOutput.description)
                 .replace("[LEAP_YEAR.NOTE]", test.maintainability.leapYear.note)
                 .replace("[LEAP_YEAR.DESCRIPTION]", test.maintainability.leapYear.description)
                 .replace("[MAINTAINABILITY.NOTE]", test.maintainability.maintainability.note)
                 .replace("[MAINTAINABILITY.DESCRIPTION]", test.maintainability.maintainability.description)

                 .replace("[VARIABLES.NOTE]", test.readability.variables.note)
                 .replace("[VARIABLES.DESCRIPTION]", test.readability.variables.description)
                 .replace("[METHODS.NOTE]", test.readability.methods.note)
                 .replace("[METHODS.DESCRIPTION]", test.readability.methods.description)
                 .replace("[COMMENTS.NOTE]", test.readability.comments.note)
                 .replace("[COMMENTS.DESCRIPTION]", test.readability.comments.description);

      return html;
    };

    return controller;
  };
})();
