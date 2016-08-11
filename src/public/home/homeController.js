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

    self.getTextValues = function () {
      self.test.result.unitTests.text = $('#unitTestsText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.quality.oo.text = $('#qualityText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.quality.intelligence.text = $('#intelligenceText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.quality.exceptionHandling.text = $("#exceptionHandlingText").text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.quality.duplicatedCode.text = $("#duplicatedCodeText").text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.quality.automatedTests.text = $('#automatedTestsText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.maintainability.inputFormat.text = $('#inputFormatText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.maintainability.addOperators.text = $('#addOperatorsText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.maintainability.alterOutput.text = $('#alterOutputText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.maintainability.leapYear.text = $('#leapYearText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.maintainability.maintainability.text = $('#maintainabilityText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.readability.variables.text = $('#variablesText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.readability.methods.text = $('#methodsText').text().replace(/\d*\%?\s?\-\s*/ ,"");
      self.test.readability.comments.text = $('#commentsText').text().replace(/\d*\%?\s?\-\s*/ ,"");
    }

    self.preview = function () {
      self.getTextValues();
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

    self.configureFakeTest = function () {
      self.test =
      {
        "name": "Um Dois TrÃªs de Oliveira Quatro",
        "level": 4,
        "complete": false,
        "result": {
          "unitTests": {
            "note" : 66,
            "description": "Dividiu as operaÃ§Ãµes em alguns mÃ©todos, porÃ©m executa de forma procedural."
          }
        },
        "quality": {
          "oo": {
            "note" : 0,
            "description": "Dividiu as operaÃ§Ãµes em alguns mÃ©todos, porÃ©m executa de forma procedural."
          },
          "intelligence": {
            "note" : 25,
            "description": "O cÃ³digo inteiro possui fluxos bem distintos para adiÃ§Ã£o e subtraÃ§Ã£o, mas separou bem o cÃ³digo."
          },
          "exceptionHandling": {
            "note" : 50,
            "description": "Valida o operador e o formato da data informado, mas nÃ£o impede nÃºmero de dias, meses e anos invÃ¡lidos."
          },
          "duplicatedCode": {
            "note" : 75,
            "description": "O cÃ³digo nÃ£o se repete, bem encapsulado e separado."
          },
          "automatedTests": {
            "note" : 33,
            "description": "Escreveu 10 testes unitÃ¡rios, mas muitos usando o mesmo modificador."
          }
        },
        "maintainability": {
          "inputFormat": {
            "note" : 100,
            "description": "Local Ãºnico e estÃ¡ simples, mas nÃ£o validado."
          },
          "addOperators": {
            "note" : 100,
            "description": "Seria necessÃ¡rio nova implementaÃ§Ã£o de forma completa."
          },
          "alterOutput": {
            "note" : 100,
            "description": "Encapsula a formataÃ§Ã£o em um mÃ©todo."
          },
          "leapYear": {
            "note" : 100,
            "description": "O nÃºmero de dias estÃ¡ fixo e nÃ£o hÃ¡ nenhum verificador."
          },
          "maintainability": {
            "note" : 66,
            "description": "62 % de acertos"
          }
        },
        "readability": {
          "variables": {
            "note" : 100,
            "description": "Os nomes das variÃ¡veis sÃ£o bons e fazem o que propÃµe."
          },
          "methods": {
            "note" : 100,
            "description": "asdf asdf asd f"
          },
          "comments": {
            "note" : 100,
            "description": "Poderia ser muito melhor a separaÃ§Ã£o e reaproveitamento."
          }
        }
      };
    };
    self.configureFakeTest();

  };

  angular.module('testCenter').controller('homeController', ['testService', '$filter', '$scope', homeController]);
})();
