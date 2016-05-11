(function () {
  'use strict';

  var app = angular.module('testCenter', []);

  app.config(['$httpProvider', function ($httpProvider) {
      $httpProvider.defaults.headers.common.Accept = 'application/json, text/javascript';
      $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
      $httpProvider.defaults.useXDomain = true;
  }]);

})();
