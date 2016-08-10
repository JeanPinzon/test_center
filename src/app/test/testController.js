(function () {
  'use strict';

  var IMAGE_PATH_RED = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
  var IMAGE_PATH_YELLOW = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
  var IMAGE_PATH_GREEN = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";

  var setImageByNote = function(item){
    if (item.note < 25) {
      item.image = IMAGE_PATH_RED;
    }
    else if (item.note === 66) {
      item.image = IMAGE_PATH_GREEN;
    }
    else if (item.note >= 25 && item.note < 75) {
      item.image = IMAGE_PATH_YELLOW;
    }
    else {
      item.image = IMAGE_PATH_GREEN;
    }
    return item;
  };

  var setImages = function(test) {
    test.result.unitTests = setImageByNote(test.result.unitTests);
    test.result.oo = setImageByNote(test.quality.oo);
    test.result.intelligence = setImageByNote(test.quality.intelligence);
    test.result.exceptionHandling = setImageByNote(test.quality.exceptionHandling);
    test.result.duplicatedCode = setImageByNote(test.quality.duplicatedCode);
    test.result.automatedTests = setImageByNote(test.quality.automatedTests);
    test.result.inputFormat = setImageByNote(test.maintainability.inputFormat);
    test.result.addOperators = setImageByNote(test.maintainability.addOperators);
    test.result.alterOutput = setImageByNote(test.maintainability.alterOutput);
    test.result.leapYear = setImageByNote(test.maintainability.leapYear);
    test.result.maintainability = setImageByNote(test.maintainability.maintainability);
    test.result.variables = setImageByNote(test.readability.variables);
    test.result.methods = setImageByNote(test.readability.methods);
    test.result.comments = setImageByNote(test.readability.comments);
    return test;
  };

  module.exports = function (app) {

    var controller = {};

    controller.send = function (req, res) {
      var html = buildResult(req.body);
      sendEmail(html);
      res.json({ ok: true, html: html });
    };

    controller.preview = function (req, res) {
      var html = buildResult(req.body);
      res.json({ ok: true, html: html });
    };

    controller.getLevel = function(req, res) {
      var level = validate(req.body);
      console.log(level);
      res.json({ ok: true, level: level });
    };

    var sendEmail = function(result) {
      var email = require("emailjs");
      var server = email.server.connect({
        user: "rafaeldeoliveirabenetti@gmail.com",
        password: "mmm",
        host: "smtp.gmail.com",
        ssl: true
      });

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

    var validate = function(test) {
      var score = calculateScore(test);

      var level;

      if (score < 2) {
        level = "Júnior 1";
      }
      else if (score >= 2 && score < 3) {
        level = "Júnior 2";
      }
      else if (score >= 3 && score < 4) {
        level = "Júnior 3";
      }
      else if (score >= 4 && score < 5) {
        level = "Pleno 1";
      }
      else if (score >= 5 && score < 6) {
        level = "Pleno 2";
      }
      else if (score >= 6 && score < 7) {
        level = "Pleno 3";
      }
      else if (score >= 7) {
        level = "Sênior";
      }

      return level;
    };

    var getValueByOption = function(total, percent){
      var value = total * percent / 100;
      return value;
    }

    var calculateScore = function(test){

      var score =
      getValueByOption(1, test.result.unitTests.note)
      + getValueByOption(2, test.quality.oo.note)
      + getValueByOption(2, test.quality.intelligence.note)
      + getValueByOption(0.5, test.quality.exceptionHandling.note)
      + getValueByOption(0.5, test.quality.duplicatedCode.note)
      + getValueByOption(1, test.quality.automatedTests.note)
      + getValueByOption(0.20, test.maintainability.inputFormat.note)
      + getValueByOption(0.20, test.maintainability.addOperators.note)
      + getValueByOption(0.20, test.maintainability.alterOutput.note)
      + getValueByOption(0.20, test.maintainability.leapYear.note)
      + getValueByOption(0.20, test.maintainability.maintainability.note)
      + getValueByOption(0.33, test.readability.variables.note)
      + getValueByOption(0.33, test.readability.methods.note)
      + getValueByOption(0.34, test.readability.comments.note);

      return score;
    };

    var buildResult = function(test) {

      var fs = require('fs');
      var html = fs.readFileSync('./templates/email/index.html', 'utf8');
      test.level = validate(test);
      test = setImages(test);

      html = html.replace("[CANDIDATE_NAME]", test.name)
      .replace("[CANDIDATE_LEVEL]", test.level)

      .replace("[UNIT_TESTS.NOTE]", test.level)
      .replace("[UNIT_TESTS.DESCRIPTION]", test.level)

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
      .replace("[COMMENTS.DESCRIPTION]", test.readability.comments.description)

      .replace("[OO.STATUS]", test.quality.oo.image)
      .replace("[INTELLIGENCE.STATUS]", test.quality.intelligence.image)
      .replace("[EXCEPTION_HANDLIND.STATUS]", test.quality.exceptionHandling.image)
      .replace("[DUPLICATED_CODE.STATUS]", test.quality.duplicatedCode.image)
      .replace("[AUTOMATED_TESTS.STATUS]", test.quality.automatedTests.image)
      .replace("[INPUT_FORMAT.STATUS]", test.maintainability.inputFormat.image)
      .replace("[ADD_OPERATORS.STATUS]", test.maintainability.addOperators.image)
      .replace("[ALTER_OUTPUT.STATUS]", test.maintainability.alterOutput.image)
      .replace("[LEAP_YEAR.STATUS]", test.maintainability.leapYear.image)
      .replace("[MAINTAINABILITY.STATUS]", test.maintainability.maintainability.image)
      .replace("[VARIABLES.STATUS]", test.readability.variables.image)
      .replace("[METHODS.STATUS]", test.readability.methods.image)
      .replace("[COMMENTS.STATUS]", test.readability.comments.image);


      return html;
    };

    return controller;
  };
})();
