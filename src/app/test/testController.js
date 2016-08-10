(function () {
  'use strict';

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

    var validateImages = function(test) {

      var unititTestsNote = test.result.unitTests.note;
      var ooNote = test.quality.oo.note;
      var intelligenceNote = test.quality.intelligence.note;
      var exceptionHandlingNote = test.quality.exceptionHandling.note;
      var duplicatedCodeNote = test.quality.duplicatedCode.note;
      var automatedTestsNote = test.quality.automatedTests.note;
      var inputFormatNote = test.maintainability.inputFormat.note;
      var addOperatorsNote = test.maintainability.addOperators.note;
      var alterOutputNote = test.maintainability.alterOutput.note;
      var leapYearNote = test.maintainability.leapYear.note;
      var maintainabilityNote = test.maintainability.maintainability.note;
      var variablesNote = test.readability.variables.note;
      var methodsNote = test.readability.methods.note;
      var commentsNote = test.readability.comments.note;

      var imagens = {};

      //==========================================================================================
      if(unititTestsNote == 0) {
        imagens.unitTests = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (unititTestsNote == 25) {
        imagens.unitTests = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (unititTestsNote == 50) {
        imagens.unitTests = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (unititTestsNote == 75) {
        imagens.unitTests = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (unititTestsNote == 100) {
        imagens.unitTests = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      //==========================================================================================
      if(ooNote == 0) {
        imagens.oo = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (ooNote == 25) {
        imagens.oo = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (ooNote == 50) {
        imagens.oo = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (ooNote == 75) {
        imagens.oo = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (ooNote == 100) {
        imagens.oo = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      //==========================================================================================
      if(intelligenceNote == 0) {
        imagens.intelligence = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (intelligenceNote == 25) {
        imagens.intelligence = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (intelligenceNote == 50) {
        imagens.intelligence = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (intelligenceNote == 75) {
        imagens.intelligence = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (intelligenceNote == 100) {
        imagens.intelligence = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      //==========================================================================================
      if(exceptionHandlingNote == 0) {
        imagens.exceptionHandling = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (exceptionHandlingNote == 25) {
        imagens.exceptionHandling = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (exceptionHandlingNote == 50) {
        imagens.exceptionHandling = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (exceptionHandlingNote == 75) {
        imagens.exceptionHandling = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (exceptionHandlingNote == 100) {
        imagens.exceptionHandling = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(duplicatedCodeNote == 0) {
        imagens.duplicatedCode = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (duplicatedCodeNote == 25) {
        imagens.duplicatedCode = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (duplicatedCodeNote == 50) {
        imagens.duplicatedCode = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (duplicatedCodeNote == 75) {
        imagens.duplicatedCode = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (duplicatedCodeNote == 100) {
        imagens.duplicatedCode = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(automatedTestsNote == 0) {
        imagens.automatedTests = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (automatedTestsNote == 25) {
        imagens.automatedTests = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (automatedTestsNote == 33) {
        imagens.automatedTests = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (automatedTestsNote == 50) {
        imagens.automatedTests = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (automatedTestsNote == 66) {
        imagens.automatedTests = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (automatedTestsNote == 75) {
        imagens.automatedTests = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (automatedTestsNote == 100) {
        imagens.automatedTests = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(inputFormatNote == 0) {
        imagens.inputFormat = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (inputFormatNote == 25) {
        imagens.inputFormat = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (inputFormatNote == 50) {
        imagens.inputFormat = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (inputFormatNote == 75) {
        imagens.inputFormat = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (inputFormatNote == 100) {
        imagens.inputFormat = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(addOperatorsNote == 0) {
        imagens.addOperators = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (addOperatorsNote == 25) {
        imagens.addOperators = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (addOperatorsNote == 50) {
        imagens.addOperators = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (addOperatorsNote == 75) {
        imagens.addOperators = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (addOperatorsNote == 100) {
        imagens.addOperators = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(alterOutputNote == 0) {
        imagens.alterOutput = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (alterOutputNote == 25) {
        imagens.alterOutput = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (alterOutputNote == 50) {
        imagens.alterOutput = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (alterOutputNote == 75) {
        imagens.alterOutput = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (alterOutputNote == 100) {
        imagens.alterOutput = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(leapYearNote == 0) {
        imagens.leapYear = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (leapYearNote == 25) {
        imagens.leapYear = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (leapYearNote == 50) {
        imagens.leapYear = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (leapYearNote == 75) {
        imagens.leapYear = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (leapYearNote == 100) {
        imagens.leapYear = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }

      //==========================================================================================
      if(maintainabilityNote == 0) {
        imagens.maintainability = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (maintainabilityNote == 25) {
        imagens.maintainability = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (maintainabilityNote == 33) {
        imagens.maintainability = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (maintainabilityNote == 50) {
        imagens.maintainability = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (maintainabilityNote == 66) {
        imagens.maintainability = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (maintainabilityNote == 75) {
        imagens.maintainability = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (maintainabilityNote == 100) {
        imagens.maintainability = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(variablesNote == 0) {
        imagens.variables = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (variablesNote == 25) {
        imagens.variables = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (variablesNote == 50) {
        imagens.variables = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (variablesNote == 75) {
        imagens.variables = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (variablesNote == 100) {
        imagens.variables = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(methodsNote == 0) {
        imagens.methods = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (methodsNote == 25) {
        imagens.methods = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (methodsNote == 50) {
        imagens.methods = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (methodsNote == 75) {
        imagens.methods = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (methodsNote == 100) {
        imagens.methods = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      if(commentsNote == 0) {
        imagens.comments = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
      }
      else if (commentsNote == 25) {
        imagens.comments = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (commentsNote == 50) {
        imagens.comments = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
      }
      else if (commentsNote == 75) {
        imagens.comments = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      else if (commentsNote == 100) {
        imagens.comments = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";
      }
      //==========================================================================================
      return imagens;
    }

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
      var urlImagens = validateImages(test);
      console.log(urlImagens);
      html = html.replace("[CANDIDATE_NAME]", test.name)
      .replace("[CANDIDATE_LEVEL]", test.level)

      // TODO: Populate the tests results.
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

      .replace("[OO.STATUS]", urlImagens.oo)
      .replace("[INTELLIGENCE.STATUS]", urlImagens.intelligence)
      .replace("[EXCEPTION_HANDLIND.STATUS]", urlImagens.exceptionHandling)
      .replace("[DUPLICATED_CODE.STATUS]", urlImagens.duplicatedCode)
      .replace("[AUTOMATED_TESTS.STATUS]", urlImagens.automatedTests)
      .replace("[INPUT_FORMAT.STATUS]", urlImagens.inputFormat)
      .replace("[ADD_OPERATORS.STATUS]", urlImagens.addOperators)
      .replace("[ALTER_OUTPUT.STATUS]", urlImagens.alterOutput)
      .replace("[LEAP_YEAR.STATUS]", urlImagens.leapYear)
      .replace("[MAINTAINABILITY.STATUS]", urlImagens.maintainability)
      .replace("[VARIABLES.STATUS]", urlImagens.variables)
      .replace("[METHODS.STATUS]", urlImagens.methods)
      .replace("[COMMENTS.STATUS]", urlImagens.comments);


      return html;
    };

    return controller;
  };
})();
