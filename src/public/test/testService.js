(function () {
  'use strict';

  var testService = function ($q, $http, urlSettingsFactory) {

    var sendTest = function (test) {
      var deferred= $q.defer();
      $http.post(urlSettingsFactory.getUrlToSendTest(), test).then(deferred.resolve);
      return deferred.promise;
    };

    return {
      sendTest: sendTest
    };

  };

  angular.module('testCenter').service('testService', [
    '$q',
    '$http',
    'urlSettingsFactory',
    testService
  ]);

})();
