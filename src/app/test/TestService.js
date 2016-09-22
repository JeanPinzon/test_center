(function(){
  'use strict';

  var ImageService = require('./ImageService');
  var imageService = new ImageService();

  var TestService = function(){

    var setImageByNote = function(item){
      if (item.note < 25) {
        item.image = imageService.IMAGE_PATH_RED;
      }
      else if (item.note === 66) {
        item.image = imageService.IMAGE_PATH_GREEN;
      }
      else if (item.note >= 25 && item.note < 75) {
        item.image = imageService.IMAGE_PATH_YELLOW;
      }
      else {
        item.image = imageService.IMAGE_PATH_GREEN;
      }
      return item;
    };

    var setImages = function(test) {
      test.quality.unitTests = setImageByNote(test.quality.unitTests);
      test.quality.oo = setImageByNote(test.quality.oo);
      test.quality.intelligence = setImageByNote(test.quality.intelligence);
      test.quality.exceptionHandling = setImageByNote(test.quality.exceptionHandling);
      test.quality.duplicatedCode = setImageByNote(test.quality.duplicatedCode);
      test.quality.automatedTests = setImageByNote(test.quality.automatedTests);
      test.maintainability.inputFormat = setImageByNote(test.maintainability.inputFormat);
      test.maintainability.addOperators = setImageByNote(test.maintainability.addOperators);
      test.maintainability.alterOutput = setImageByNote(test.maintainability.alterOutput);
      test.maintainability.leapYear = setImageByNote(test.maintainability.leapYear);
      test.maintainability.maintainability = setImageByNote(test.maintainability.maintainability);
      test.readability.variables = setImageByNote(test.readability.variables);
      test.readability.methods = setImageByNote(test.readability.methods);
      test.readability.comments = setImageByNote(test.readability.comments);
      return test;
    };

    this.validate = function(test) {
      test.score = calculateScore(test);

      if (test.levelManuallyChanged) {
        test.score = test.level;
      }

      if (test.score < 2) {
        test.level = "Júnior 1";
        test.image = getRandomImageFromArray(imageService.juniors);
      }
      else if (test.score >= 2 && test.score < 3) {
        test.level = "Júnior 2";
        test.image = getRandomImageFromArray(imageService.juniors2);
      }
      else if (test.score >= 3 && test.score < 4) {
        test.level = "Júnior 3";
        test.image = getRandomImageFromArray(imageService.juniors3);
      }
      else if (test.score >= 4 && test.score < 5) {
        test.level = "Pleno 1";
        test.image = getRandomImageFromArray(imageService.plenos);
      }
      else if (test.score >= 5 && test.score < 6) {
        test.level = "Pleno 2";
        test.image = getRandomImageFromArray(imageService.plenos2);
      }
      else if (test.score >= 6 && test.score < 7) {
        test.level = "Pleno 3";
        test.image = getRandomImageFromArray(imageService.plenos3);
      }
      else if (test.score >= 7) {
        test.level = "Sênior";
        test.image = getRandomImageFromArray(imageService.seniors);
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
      getValueByOption(2, test.quality.oo.note)
      + getValueByOption(2, test.quality.intelligence.note)
      + getValueByOption(0.5, test.quality.exceptionHandling.note)
      + getValueByOption(0.5, test.quality.duplicatedCode.note)
      + getValueByOption(1, test.quality.unitTests.note)
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

    this.buildResult = function(test) {

      var fs = require('fs');
      var html = fs.readFileSync('./templates/email/index.html', 'utf8');

      test = this.validate(test);
      test = setImages(test);

      html = html.replace("[CANDIDATE_NAME]", test.name)
      .replace("[CANDIDATE_LEVEL]", test.level)
      .replace("[CANDIDATE_LEVEL_IMAGE]", test.image)
      .replace("[CANDIDATE_FEEDBACK]", test.feedback)

      //.replace("[UNIT_TESTS.NOTE]", test.quality.level)
      //.replace("[UNIT_TESTS.DESCRIPTION]", test.quality.level)

      .replace("[OO.NOTE]", test.quality.oo.text)
      .replace("[OO.DESCRIPTION]", test.quality.oo.description)
      .replace("[INTELLIGENCE.NOTE]", test.quality.intelligence.text)
      .replace("[INTELLIGENCE.DESCRIPTION]", test.quality.intelligence.description)
      .replace("[EXCEPTION_HANDLIND.NOTE]", test.quality.exceptionHandling.text)
      .replace("[EXCEPTION_HANDLIND.DESCRIPTION]", test.quality.exceptionHandling.description)
      .replace("[DUPLICATED_CODE.NOTE]", test.quality.duplicatedCode.text)
      .replace("[DUPLICATED_CODE.DESCRIPTION]", test.quality.duplicatedCode.description)
      .replace("[UNIT_TESTS.NOTE]", test.quality.unitTests.text)
      .replace("[UNIT_TESTS.DESCRIPTION]", test.quality.unitTests.description)
      .replace("[AUTOMATED_TESTS.NOTE]", test.quality.automatedTests.text)
      .replace("[AUTOMATED_TESTS.DESCRIPTION]", test.quality.automatedTests.description)

      .replace("[INPUT_FORMAT.NOTE]", test.maintainability.inputFormat.text)
      .replace("[INPUT_FORMAT.DESCRIPTION]", test.maintainability.inputFormat.description)
      .replace("[ADD_OPERATORS.NOTE]", test.maintainability.addOperators.text)
      .replace("[ADD_OPERATORS.DESCRIPTION]", test.maintainability.addOperators.description)
      .replace("[ALTER_OUTPUT.NOTE]", test.maintainability.alterOutput.text)
      .replace("[ALTER_OUTPUT.DESCRIPTION]", test.maintainability.alterOutput.description)
      .replace("[LEAP_YEAR.NOTE]", test.maintainability.leapYear.text)
      .replace("[LEAP_YEAR.DESCRIPTION]", test.maintainability.leapYear.description)
      .replace("[MAINTAINABILITY.NOTE]", test.maintainability.maintainability.text)
      .replace("[MAINTAINABILITY.DESCRIPTION]", test.maintainability.maintainability.description)

      .replace("[VARIABLES.NOTE]", test.readability.variables.text)
      .replace("[VARIABLES.DESCRIPTION]", test.readability.variables.description)
      .replace("[METHODS.NOTE]", test.readability.methods.text)
      .replace("[METHODS.DESCRIPTION]", test.readability.methods.description)
      .replace("[COMMENTS.NOTE]", test.readability.comments.text)
      .replace("[COMMENTS.DESCRIPTION]", test.readability.comments.description)

      .replace("[OO.STATUS]", test.quality.oo.image)
      .replace("[INTELLIGENCE.STATUS]", test.quality.intelligence.image)
      .replace("[EXCEPTION_HANDLIND.STATUS]", test.quality.exceptionHandling.image)
      .replace("[DUPLICATED_CODE.STATUS]", test.quality.duplicatedCode.image)
      .replace("[UNIT_TESTS.STATUS]", test.quality.unitTests.image)
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
  };

  module.exports = TestService;

})();
