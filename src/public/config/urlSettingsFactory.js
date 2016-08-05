(function () {
  'use strict';

  var urlSettingsFactory = function () {

    var host = 'http://localhost:3000';

    var getUrlToSend = function () {
      return host + '/api/v1/avaliacao';
    };

    var getUrlToPreview = function () {
      return host + '/api/v1/preview';
    };

    var getUrlToGetLevel = function () {
      return host + '/api/v1/level';
    };

    return {
      getUrlToSend: getUrlToSend,
      getUrlToPreview: getUrlToPreview,
      getUrlToGetLevel: getUrlToGetLevel
    };

  };

  angular.module('testCenter').factory('urlSettingsFactory', [
    urlSettingsFactory
  ]);

})();
