(function () {
  'use strict';

  var homeController = function (testService, $filter, $scope, $mdDialog) {

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
      testService.sendTest(self.test).then(function(response){
        if(response.data.valid){
          showFinishDialog();
          $scope.selectedIndex = 0;
          self.test = {};
        };
      });
    };

    var showFinishDialog = function(){
      $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Teste Center')
            .textContent('Avaliação enviada com sucesso!')
            .ariaLabel('Alert Dialog Demo')
            .ok('Fechar')
      )
    }

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
      return $scope.testForm.$valid && !!$scope.testForm.feedback && !!$scope.testForm.feedback.$modelValue;
    };

    self.canFinish= function(){
      return self.canPreview() && !!self.test && self.test.isViewed;
    };

    self.setLevelManuallyChanged = function(){
      self.test.levelManuallyChanged = true;
    };

    self.recalculateLevel = function(){
      self.test.levelManuallyChanged = false;
      self.getLevel();
    };

    // TODO: If is debug mode run this fake test.
    self.configureFakeTest = function () {
      self.test =
      {
        "name": "Um Dois Três de Oliveira Quatro",
        "level": 4,
        "complete": false,
        "feedback": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.",
        "quality": {
          "oo": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Diuretics paradis num copo é motivis de denguis."
          },
          "intelligence": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis."
          },
          "exceptionHandling": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
          },
          "duplicatedCode": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Cacilds vidis litro abertis. Diuretics paradis."
          },
          "unitTests": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
          },
          "automatedTests": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Vidis litro abertis. Diuretics paradis num copo é motivis de denguis.."
          }
        },
        "maintainability": {
          "inputFormat": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
          },
          "addOperators": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Diuretics paradis num copo é motivis de denguis."
          },
          "alterOutput": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Litro abertis. Diuretics paradis num copo é motivis de denguis."
          },
          "leapYear": {
            "note" : {
             "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
          },
          "maintainability": {
            "note" : {
               "value": 100,
               "text": "5 - Excelente"
            },
            "description": "Diuretics paradis num copo é motivis de denguis."
          }
        },
        "readability": {
          "variables": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
          },
          "methods": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": "Diuretics paradis num copo é motivis de denguis. Diuretics paradis num copo é motivis de denguis."
          },
          "comments": {
            "note" : {
              "value": 100,
              "text": "5 - Excelente"
            },
            "description": " Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis."
          }
        }
      };
    };
    self.configureFakeTest();

  };

  angular.module('testCenter').controller('homeController', ['testService', '$filter', '$scope', '$mdDialog' , homeController]);
})();
