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
        "name": "Um Dois Três de Oliveira Quatro",
        "level": "Júnior 2",
        "quality": {
          "oo": {
            "note" : "2 - Abaixo da média",
            "description": "Dividiu as operações em alguns métodos, porém executa de forma procedural."
          },
          "intelligence": {
            "note" : "1 - Não atende ao requisito",
            "description": "O código inteiro possui fluxos bem distintos para adição e subtração, mas separou bem o código."
          },
          "exceptionHandling": {
            "note" : "2 - Abaixo da média",
            "description": "Valida o operador e o formato da data informado, mas não impede número de dias, meses e anos inválidos."
          },
          "duplicatedCode": {
            "note" : "2 - Abaixo da média",
            "description": "O código não se repete, bem encapsulado e separado."
          },
          "automatedTests": {
            "note" : "5 - Excelente",
            "description": "Escreveu 10 testes unitários, mas muitos usando o mesmo modificador."
          }
        },
        "maintainability": {
          "inputFormat": {
            "note" : "2 - Abaixo da média",
            "description": "Local único e está simples, mas não validado."
          },
          "addOperators": {
            "note" : "2 - Abaixo da média",
            "description": "Seria necessário nova implementação de forma completa."
          },
          "alterOutput": {
            "note" : "3 - Normal",
            "description": "Encapsula a formatação em um método."
          },
          "leapYear": {
            "note" : "3 - Normal",
            "description": "O número de dias está fixo e não há nenhum verificador."
          },
          "maintainability": {
            "note" : "2 - Abaixo da média",
            "description": "62 % de acertos"
          }
        },
        "readability": {
          "variables": {
            "note" : "2 - Abaixo da média",
            "description": "Os nomes das variáveis são bons e fazem o que propõe."
          },
          "methods": {
            "note" : "2 - Abaixo da média",
            "description": ""
          },
          "comments": {
            "note" : "1 - Não atende ao requisito",
            "description": "Poderia ser muito melhor a separação e reaproveitamento."
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
