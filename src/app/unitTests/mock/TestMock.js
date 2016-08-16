(function(){
  'use strict';

  var TestMock = function(){
    this.completeTest = configureFakeTest();
  };

  var configureFakeTest = function () {
    var test =
    {
      "name": "Um Dois Três de Oliveira Quatro",
      "level": 4,
      "complete": false,
      "feedback": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.",
      "result": {
        "unitTests": {
          "note" : 66,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        }
      },
      "quality": {
        "oo": {
          "note" : 0,
          "description": "Diuretics paradis num copo é motivis de denguis."
        },
        "intelligence": {
          "note" : 25,
          "description": "Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis."
        },
        "exceptionHandling": {
          "note" : 50,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "duplicatedCode": {
          "note" : 75,
          "description": "Cacilds vidis litro abertis. Diuretics paradis."
        },
        "automatedTests": {
          "note" : 33,
          "description": "Vidis litro abertis. Diuretics paradis num copo é motivis de denguis.."
        }
      },
      "maintainability": {
        "inputFormat": {
          "note" : 100,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "addOperators": {
          "note" : 100,
          "description": "Diuretics paradis num copo é motivis de denguis."
        },
        "alterOutput": {
          "note" : 100,
          "description": "Litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "leapYear": {
          "note" : 100,
          "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "maintainability": {
          "note" : 66,
          "description": "Diuretics paradis num copo é motivis de denguis."
        }
      },
      "readability": {
        "variables": {
          "note" : 100,
          "description": "Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        },
        "methods": {
          "note" : 100,
          "description": "Diuretics paradis num copo é motivis de denguis. Diuretics paradis num copo é motivis de denguis."
        },
        "comments": {
          "note" : 100,
          "description": " Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
        }
      }
    };

  return test;
};

module.exports = TestMock;

})();
