(function(){
  'use strict';

  var TestMock = function(){
    this.JuniorUmCandidate = getJuniorUmCandidate();
    this.JuniorDoisCandidate = getJuniorDoisCandidate();
    this.JuniorTresCandidate = getJuniorTresCandidate();
    this.PlenoUmCandidate = getPlenoUmCandidate();
    this.PlenoDoisCandidate = getPlenoDoisCandidate();
    this.PlenoTresCandidate = getPlenoTresCandidate();
    this.SeniorCandidate = getSeniorCandidate();
  };

  var configureFakeTest = function (value) {
    var test =
    {
      "name": "Um Dois Três de Oliveira Quatro",
      "level": 4,
      "complete": false,
      "feedback": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.",
      "quality": {
        "oo": {
          "note" : value.ooNote,
          "description": "Diuretics paradis num copo é motivis de denguis."
        },
        "intelligence": {
          "note" : value.intelligenceNote,
          "description": "Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis."
        },
        "exceptionHandling": {
          "note" : value.exceptionHandlingNote,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "duplicatedCode": {
          "note" : value.duplicatedCodeNote,
          "description": "Cacilds vidis litro abertis. Diuretics paradis."
        },
        "unitTests": {
          "note" : value.unitTestsNote,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "automatedTests": {
          "note" : value.automatedTestsNote,
          "description": "Vidis litro abertis. Diuretics paradis num copo é motivis de denguis.."
        }
      },
      "maintainability": {
        "inputFormat": {
          "note" : value.maintainabilityNote,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "addOperators": {
          "note" : value.addOperatorsNote,
          "description": "Diuretics paradis num copo é motivis de denguis."
        },
        "alterOutput": {
          "note" : value.alterOutputNote,
          "description": "Litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "leapYear": {
          "note" : value.leapYearNote,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "maintainability": {
          "note" : value.maintainabilityNote,
          "description": "Diuretics paradis num copo é motivis de denguis."
        }
      },
      "readability": {
        "variables": {
          "note" : value.readabilityNote,
          "description": "Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "methods": {
          "note" : value.methodsNote,
          "description": "Diuretics paradis num copo é motivis de denguis. Diuretics paradis num copo é motivis de denguis."
        },
        "comments": {
          "note" : value.commentsNote,
          "description": " Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        }
      }
    };

  return test;
};

var getJuniorUmCandidate = function(){
  var jun = {unitTestsNote : 0, ooNote : 25, intelligenceNote : 25, exceptionHandlingNote : 25, duplicatedCodeNote : 25, automatedTestsNote : 25, maintainabilityNote : 25,
    addOperatorsNote : 25, alterOutputNote : 25, leapYearNote : 0, maintainabilityNote : 25, readabilityNote : 25, methodsNote : 0, commentsNote : 25}

    return configureFakeTest(jun);
}

var getJuniorDoisCandidate = function(){
  var jun = {unitTestsNote : 25, ooNote : 25, intelligenceNote : 25, exceptionHandlingNote : 25, duplicatedCodeNote : 25, automatedTestsNote : 25, maintainabilityNote : 25,
    addOperatorsNote : 25, alterOutputNote : 25, leapYearNote : 25, maintainabilityNote : 25, readabilityNote : 25, methodsNote : 25, commentsNote : 25}

    return configureFakeTest(jun);
}

var getJuniorTresCandidate = function(){
  var jun = {unitTestsNote : 50, ooNote : 75, intelligenceNote : 50, exceptionHandlingNote : 25, duplicatedCodeNote : 25, automatedTestsNote : 25, maintainabilityNote : 25,
    addOperatorsNote : 25, alterOutputNote : 25, leapYearNote : 25, maintainabilityNote : 25, readabilityNote : 25, methodsNote : 25, commentsNote : 25}

    return configureFakeTest(jun);
}

var getPlenoUmCandidate = function(){
  var plen = {unitTestsNote : 50, ooNote : 50, intelligenceNote : 50, exceptionHandlingNote : 50, duplicatedCodeNote : 50, automatedTestsNote : 50, maintainabilityNote : 50,
    addOperatorsNote : 50, alterOutputNote : 50, leapYearNote : 50, maintainabilityNote : 50, readabilityNote : 50, methodsNote : 50, commentsNote : 50}

    return configureFakeTest(plen);
}

var getPlenoUmCandidate = function(){
  var plen = {unitTestsNote : 50, ooNote : 50, intelligenceNote : 50, exceptionHandlingNote : 50, duplicatedCodeNote : 50, automatedTestsNote : 50, maintainabilityNote : 50,
    addOperatorsNote : 50, alterOutputNote : 50, leapYearNote : 50, maintainabilityNote : 50, readabilityNote : 50, methodsNote : 50, commentsNote : 50}

    return configureFakeTest(plen);
}

var getPlenoDoisCandidate = function(){
  var plen = {unitTestsNote : 75, ooNote : 50, intelligenceNote : 50, exceptionHandlingNote : 75, duplicatedCodeNote : 75, automatedTestsNote : 50, maintainabilityNote : 50,
    addOperatorsNote : 50, alterOutputNote : 75, leapYearNote : 50, maintainabilityNote : 75, readabilityNote : 50, methodsNote : 50, commentsNote : 50}

    return configureFakeTest(plen);
}

var getPlenoTresCandidate = function(){
  var plen = {unitTestsNote : 100, ooNote : 100, intelligenceNote : 75, exceptionHandlingNote : 75, duplicatedCodeNote : 75, automatedTestsNote : 50, maintainabilityNote : 50,
    addOperatorsNote : 50, alterOutputNote : 75, leapYearNote : 50, maintainabilityNote : 75, readabilityNote : 50, methodsNote : 50, commentsNote : 75}

    return configureFakeTest(plen);
}

var getSeniorCandidate = function(){
  var sen = {unitTestsNote : 100, ooNote : 100, intelligenceNote : 75, exceptionHandlingNote : 75, duplicatedCodeNote : 75, automatedTestsNote : 50, maintainabilityNote : 50,
    addOperatorsNote : 50, alterOutputNote : 75, leapYearNote : 75, maintainabilityNote : 75, readabilityNote : 50, methodsNote : 75, commentsNote : 75}

    return configureFakeTest(sen);
}

module.exports = TestMock;

})();
