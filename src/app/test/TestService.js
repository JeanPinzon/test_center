(function(){
  'use strict';

  var ImageService = require('./ImageService');
  var ScoreService = require('./ScoreService');
  var imageService = new ImageService();

  var TestService = function(){
    var setImages = function(test) {
      test.quality.unitTests = imageService.setImageByNote(test.quality.unitTests); 
      test.quality.oo = imageService.setImageByNote(test.quality.oo); 
      test.quality.intelligence = imageService.setImageByNote(test.quality.intelligence); 
      test.quality.exceptionHandling = imageService.setImageByNote(test.quality.exceptionHandling); 
      test.quality.duplicatedCode = imageService.setImageByNote(test.quality.duplicatedCode); 
      test.quality.automatedTests = imageService.setImageByNote(test.quality.automatedTests); 
      test.maintainability.inputFormat = imageService.setImageByNote(test.maintainability.inputFormat); 
      test.maintainability.addOperators = imageService.setImageByNote(test.maintainability.addOperators); 
      test.maintainability.alterOutput = imageService.setImageByNote(test.maintainability.alterOutput); 
      test.maintainability.leapYear = imageService.setImageByNote(test.maintainability.leapYear); 
      test.maintainability.maintainability = imageService.setImageByNote(test.maintainability.maintainability); 
      test.readability.variables = imageService.setImageByNote(test.readability.variables); 
      test.readability.methods = imageService.setImageByNote(test.readability.methods); 
      test.readability.comments = imageService.setImageByNote(test.readability.comments); 
      return test;
    };

    this.validate = function(test) {
      test.score = calculateScore(test);

      if (test.levelManuallyChanged) {
        test.score = test.level;
      }

      var score = new ScoreService(test.score);
      var result = score.result();
      test.level = result.name;
      test.image = result.image;

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
      getValueByOption(2, test.quality.oo.note.value)
      + getValueByOption(2, test.quality.intelligence.note.value)
      + getValueByOption(0.5, test.quality.exceptionHandling.note.value)
      + getValueByOption(0.5, test.quality.duplicatedCode.note.value)
      + getValueByOption(1, test.quality.unitTests.note.value)
      + getValueByOption(1, test.quality.automatedTests.note.value)
      + getValueByOption(0.20, test.maintainability.inputFormat.note.value)
      + getValueByOption(0.20, test.maintainability.addOperators.note.value)
      + getValueByOption(0.20, test.maintainability.alterOutput.note.value)
      + getValueByOption(0.20, test.maintainability.leapYear.note.value)
      + getValueByOption(0.20, test.maintainability.maintainability.note.value)
      + getValueByOption(0.33, test.readability.variables.note.value)
      + getValueByOption(0.33, test.readability.methods.note.value)
      + getValueByOption(0.34, test.readability.comments.note.value);

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

      .replace("[OO.NOTE]", test.quality.oo.note.text)
      .replace("[OO.DESCRIPTION]", test.quality.oo.description)
      .replace("[INTELLIGENCE.NOTE]", test.quality.intelligence.note.text)
      .replace("[INTELLIGENCE.DESCRIPTION]", test.quality.intelligence.description)
      .replace("[EXCEPTION_HANDLIND.NOTE]", test.quality.exceptionHandling.note.text)
      .replace("[EXCEPTION_HANDLIND.DESCRIPTION]", test.quality.exceptionHandling.description)
      .replace("[DUPLICATED_CODE.NOTE]", test.quality.duplicatedCode.note.text)
      .replace("[DUPLICATED_CODE.DESCRIPTION]", test.quality.duplicatedCode.description)
      .replace("[UNIT_TESTS.NOTE]", test.quality.unitTests.note.text)
      .replace("[UNIT_TESTS.DESCRIPTION]", test.quality.unitTests.description)
      .replace("[AUTOMATED_TESTS.NOTE]", test.quality.automatedTests.note.text)
      .replace("[AUTOMATED_TESTS.DESCRIPTION]", test.quality.automatedTests.description)

      .replace("[INPUT_FORMAT.NOTE]", test.maintainability.inputFormat.note.text)
      .replace("[INPUT_FORMAT.DESCRIPTION]", test.maintainability.inputFormat.description)
      .replace("[ADD_OPERATORS.NOTE]", test.maintainability.addOperators.note.text)
      .replace("[ADD_OPERATORS.DESCRIPTION]", test.maintainability.addOperators.description)
      .replace("[ALTER_OUTPUT.NOTE]", test.maintainability.alterOutput.note.text)
      .replace("[ALTER_OUTPUT.DESCRIPTION]", test.maintainability.alterOutput.description)
      .replace("[LEAP_YEAR.NOTE]", test.maintainability.leapYear.note.text)
      .replace("[LEAP_YEAR.DESCRIPTION]", test.maintainability.leapYear.description)
      .replace("[MAINTAINABILITY.NOTE]", test.maintainability.maintainability.note.text)
      .replace("[MAINTAINABILITY.DESCRIPTION]", test.maintainability.maintainability.description)

      .replace("[VARIABLES.NOTE]", test.readability.variables.note.text)
      .replace("[VARIABLES.DESCRIPTION]", test.readability.variables.description)
      .replace("[METHODS.NOTE]", test.readability.methods.note.text)
      .replace("[METHODS.DESCRIPTION]", test.readability.methods.description)
      .replace("[COMMENTS.NOTE]", test.readability.comments.note.text)
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
