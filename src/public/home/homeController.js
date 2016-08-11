(function () {
  'use strict';

  var homeController = function (testService, $filter, $scope) {

    var self = this;

    self.defaultOptions = [{
      text: 'Selecione'
    },{
      value: 0,
      text: '1 - Não atende ao requisito'
    },{
      value: 25,
      text: '2 - Abaixo da média'
    },{
      value: 50,
      text: '3 - Normal'
    },{
      value: 75,
      text: '4 - Acima do desejado'
    },{
      value: 100,
      text: '5 - Excelente'
    }];

    self.automatedTestsOptions = [{
      text: 'Selecione'
    },{
      value: 0,
      text: '0% - Péssimo'
    },{
      value: 33,
      text: '20% - Ruim'
    },{
      value: 66,
      text: '50% - OK'
    },{
      value: 100,
      text: '70% - Excelente'
    }];

    self.levels = [{
      value: 1,
      text: 'Júnior 1'
    },{
      value: 2,
      text: 'Júnior 2'
    },{
      value: 3,
      text: 'Júnior 3'
    },{
      value: 4,
      text: 'Pleno 1'
    },{
      value: 5,
      text: 'Pleno 2'
    },{
      value: 6,
      text: 'Pleno 3'
    },{
      value: 7,
      text: 'Sênior'
    }];

    self.sendTest = function () {
      testService.sendTest(self.test);
    };

    self.preview = function () {
      testService.preview(self.test);
      self.test.isViewed = true;
    };

    self.getLevelByDescription = function(description){
      var level = $filter('filter')(self.levels, description)[0].value;
      return level;
    };

    self.getLevel = function() {
      testService.getLevel(self.test).then(function(response){
        var levelDescription = response.data.level;
        var level = self.getLevelByDescription(levelDescription);
        self.test.level = level;
      });
    };

    self.canPreview = function(){
      return $scope.testForm.$valid && true;//!!$scope.testForm.feedback.$modelValue;
    };

    self.canFinish= function(){
      return $scope.testForm.$valid && !!self.test && self.test.isViewed;
    };

    self.setLevelManuallyChanged = function(){
      self.test.levelManuallyChanged = true;
    };

    self.recalculateLevel = function(){
      self.test.levelManuallyChanged = false;
      self.getLevel();
    };

    self.configureFakeTest = function () {
      self.test =
      {
        "name": "Um Dois Três de Oliveira Quatro",
        "level": 4,
        "complete": false,
        "result": {
          "unitTests": {
            "note" : 66,
            "description": "Dividiu as operações em alguns métodos, porém executa de forma procedural."
          }
        },
        "quality": {
          "oo": {
            "note" : 0,
            "description": "Dividiu as operações em alguns métodos, porém executa de forma procedural."
          },
          "intelligence": {
            "note" : 25,
            "description": "O código inteiro possui fluxos bem distintos para adição e subtração, mas separou bem o código."
          },
          "exceptionHandling": {
            "note" : 50,
            "description": "Valida o operador e o formato da data informado, mas não impede número de dias, meses e anos inválidos."
          },
          "duplicatedCode": {
            "note" : 75,
            "description": "O código não se repete, bem encapsulado e separado."
          },
          "automatedTests": {
            "note" : 33,
            "description": "Escreveu 10 testes unitários, mas muitos usando o mesmo modificador."
          }
        },
        "maintainability": {
          "inputFormat": {
            "note" : 100,
            "description": "Local único e está simples, mas não validado."
          },
          "addOperators": {
            "note" : 100,
            "description": "Seria necessário nova implementação de forma completa."
          },
          "alterOutput": {
            "note" : 100,
            "description": "Encapsula a formatação em um método."
          },
          "leapYear": {
            "note" : 100,
            "description": "O número de dias está fixo e não há nenhum verificador."
          },
          "maintainability": {
            "note" : 66,
            "description": "62 % de acertos"
          }
        },
        "readability": {
          "variables": {
            "note" : 100,
            "description": "Os nomes das variáveis são bons e fazem o que propõe."
          },
          "methods": {
            "note" : 100,
            "description": "asdf asdf asd f"
          },
          "comments": {
            "note" : 100,
            "description": "Poderia ser muito melhor a separação e reaproveitamento."
          }
        }
      };
    };
    self.configureFakeTest();
  };

  angular.module('testCenter').controller('homeController', ['testService', '$filter', '$scope', homeController]);
})();
