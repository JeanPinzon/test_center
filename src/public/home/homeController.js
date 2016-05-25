(function () {
  'use strict';

  var homeController = function (testService) {

    var self = this;

    self.defaultOptions = [{
      text: 'Selecione'
    },{
      value: 1,
      text: '1 - Não atende ao requisito'
    },{
      value: 2,
      text: '2 - Abaixo da média'
    },{
      value: 3,
      text: '3 - Normal'
    },{
      value: 4,
      text: '4 - Acima do desejado'
    },{
      value: 5,
      text: '5 - Excelente'
    }];

    self.automatedTestsOptions = [{
      text: 'Selecione'
    },{
      value: 0,
      text: '0% - Péssimo'
    },{
      value: 20,
      text: '20% - Ruim'
    },{
      value: 50,
      text: '50% - OK'
    },{
      value: 70,
      text: '70% - Excelente'
    }];

    self.sendTest = function () {
      self.test =
      {
        "quality": {
          "oo": {
            "note": 2,
            "description": "asd fa"
          },
          "intelligence": {
            "note": 1,
            "description": "sfd asd"
          },
          "exceptionHandling": {
            "note": 2,
            "description": "f asd a"
          },
          "duplicatedCode": {
            "note": 2,
            "description": "asd fas"
          },
          "automatedTests": {
            "note": 50,
            "description": "df asd fa"
          }
        },
        "maintainability": {
          "inputFormat": {
            "note": 2,
            "description": "asdf a"
          },
          "addOperators": {
            "note": 2,
            "description": "sdf asd"
          },
          "alterOutput": {
            "note": 3,
            "description": "f asdf"
          },
          "leapYear": {
            "note": 3,
            "description": "df asd"
          },
          "maintainability": {
            "note": 20,
            "description": "f asdf"
          }
        },
        "readability": {
          "variables": {
            "note": 2,
            "description": "asdf a"
          },
          "methods": {
            "note": 2,
            "description": "asdf a"
          },
          "comments": {
            "note": 1,
            "description": "dfa sdfa"
          }
        }
      };
      
      testService.sendTest(self.test);
    };
  };

  angular.module('testCenter').controller('homeController', [
    'testService',
    homeController
  ]);

})();
