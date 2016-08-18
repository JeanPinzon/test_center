(function(){
  'use strict';

  var TestMock = function(){
    this.PlenoCandidate = getPlenoCandidate();
  };

  var configureFakeTest = function (value) {
    var test =
    {
      "name": "Um Dois Três de Oliveira Quatro",
      "level": 4,
      "complete": false,
      "feedback": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.",
      "result": {
        "unitTests": {
          "note" : value.unitTestsNote,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        }
      },
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

var getPlenoCandidate = function(){
  var plen = {unitTestsNote : 50, ooNote : 50, intelligenceNote : 50, exceptionHandlingNote : 50, duplicatedCodeNote : 50, automatedTestsNote : 50, maintainabilityNote : 50,
    addOperatorsNote : 50, alterOutputNote : 50, leapYearNote : 50, maintainabilityNote : 50, readabilityNote : 50, methodsNote : 50, commentsNote : 50}

    return configureFakeTest(plen);
}

module.exports = TestMock;

})();
