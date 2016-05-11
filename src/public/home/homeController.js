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
      testService.sendTest(self.test);
    };
  };

  angular.module('testCenter').controller('homeController', [
    'testService',
    homeController
  ]);

})();
