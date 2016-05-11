(function () {
  'use strict';

  var urlSettingsFactory = function () {

    var host = 'http://localhost:3000';

    var getUrlToSendTest = function () {
      return host + '/api/v1/avaliacao';
    };

    return {
      getUrlToSendTest: getUrlToSendTest
    };

  };

  angular.module('testCenter').factory('urlSettingsFactory', [
    urlSettingsFactory
  ]);

})();
