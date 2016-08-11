(function () {
  'use strict';

  var IMAGE_PATH_RED = "https://dl.dropboxusercontent.com/s/88eae559e0c9ru4/error.png?dl=0";
  var IMAGE_PATH_YELLOW = "https://dl.dropboxusercontent.com/s/8b1ye3yos0nqsct/alert.png?dl=0";
  var IMAGE_PATH_GREEN = "https://dl.dropboxusercontent.com/s/s5wwi2mcmwdv7f4/ok.png?dl=0";

  var juniors = [
    "https://dl.dropboxusercontent.com/s/fkyohi594ndd59e/PIDGEY.png?dl=0",
    "https://dl.dropboxusercontent.com/s/0x4sku5sgwgcomv/RATATA.png?dl=0",
    "https://dl.dropboxusercontent.com/s/2mqwt92flc5vfsh/WEEDLE.png?dl=0"
  ];

  var juniors2 = [
    "https://dl.dropboxusercontent.com/s/xlc5ovkt3mazmul/CATERPIE.png?dl=0",
    "https://dl.dropboxusercontent.com/s/hxdge50u83wal8d/KAKUNA.png?dl=0",
    "https://dl.dropboxusercontent.com/s/c0wddiv08usxaym/ZUBAT.png?dl=0"
  ];

  var juniors3 = [
    "https://dl.dropboxusercontent.com/s/5qiudz8dz368phf/EKANS.png?dl=0",
    "https://dl.dropboxusercontent.com/s/8ehub66uig6e9jr/POLIWAG.png?dl=0",
    "https://dl.dropboxusercontent.com/s/j3tzcd9jcry02di/SPEAROW.png?dl=0"
  ];

  var plenos = [
    "https://dl.dropboxusercontent.com/s/d90j139a2w88xko/EEVEE.png?dl=0",
    "https://dl.dropboxusercontent.com/s/qx9gqidob37pq0p/GOLBAT.png?dl=0",
    "https://dl.dropboxusercontent.com/s/cpftw2lobvt3w29/PSYDUCK.png?dl=0"
  ];

  var plenos2 = [
    "https://dl.dropboxusercontent.com/s/3500xx2hqqw9zwt/BELLSPROUT.png?dl=0",
    "https://dl.dropboxusercontent.com/s/zmk96td6l7elr54/JOLTEON.png?dl=0",
    "https://dl.dropboxusercontent.com/s/m5vrzb5s0jwu4je/MEOWTH.png?dl=0"
  ];

  var plenos3 = [
    "https://dl.dropboxusercontent.com/s/545g5mf831pqrul/CHARMANDER.png?dl=0",
    "https://dl.dropboxusercontent.com/s/sgyen5kgvp0q4b7/BULBASAUR.png?dl=0",
    "https://dl.dropboxusercontent.com/s/p6fy2udodnr2il9/SQUIRTLE.png?dl=0",
    "https://dl.dropboxusercontent.com/s/a45fi7ynt9lq05g/PIKACHU.png?dl=0"
  ];

  var seniors = [
    "https://dl.dropboxusercontent.com/s/pcbelm7plzoruo5/CHARIZARD.png?dl=0",
    "https://dl.dropboxusercontent.com/s/9uhvgyl27i6mkyk/DRAGONITE.png?dl=0",
    "https://dl.dropboxusercontent.com/s/48zzdfd9v97ebqa/GYARADOS.png?dl=0",
    "https://dl.dropboxusercontent.com/s/5g4cta933m6md0n/MEWTWO.png?dl=0"
  ];

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
      var test = validate(req.body);
      res.json({ ok: true, level: test.level });
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

      test.score = calculateScore(test);

      if (test.levelManuallyChanged) {
        test.score = test.level;
      }

      if (test.score < 2) {
        test.level = "Júnior 1";
        test.image = getRandomImageFromArray(juniors);
      }
      else if (test.score >= 2 && test.score < 3) {
        test.level = "Júnior 2";
        test.image = getRandomImageFromArray(juniors2);
      }
      else if (test.score >= 3 && test.score < 4) {
        test.level = "Júnior 3";
        test.image = getRandomImageFromArray(juniors3);
      }
      else if (test.score >= 4 && test.score < 5) {
        test.level = "Pleno 1";
        test.image = getRandomImageFromArray(plenos);
      }
      else if (test.score >= 5 && test.score < 6) {
        test.level = "Pleno 2";
        test.image = getRandomImageFromArray(plenos2);
      }
      else if (test.score >= 6 && test.score < 7) {
        test.level = "Pleno 3";
        test.image = getRandomImageFromArray(plenos3);
      }
      else if (test.score >= 7) {
        test.level = "Sênior";
        test.image = getRandomImageFromArray(seniors);
      }

      return test;
    };

    var getRandomImageFromArray = function(array){
      return array[Math.floor(Math.random()*array.length)];
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

      test = validate(test);
      test = setImages(test);

      html = html.replace("[CANDIDATE_NAME]", test.name)
      .replace("[CANDIDATE_LEVEL]", test.level)
      .replace("[CANDIDATE_LEVEL_IMAGE]", test.image)

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
