(function () {
  'use strict';

  var testService = function ($q, $http, urlSettingsFactory) {

    var sendTest = function (test) {
      var deferred= $q.defer();
      $http.post(urlSettingsFactory.getUrlToSend(), test).then(function(response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    };

    var preview = function (test) {
      var deferred= $q.defer();
      $http.post(urlSettingsFactory.getUrlToPreview(), test).then(function(response) {
        $('#preview').empty().append(response.data.html);        
        deferred.resolve;
      });
      return deferred.promise;
    };

    var getLevel = function (test) {
      var deferred= $q.defer();
      $http.post(urlSettingsFactory.getUrlToGetLevel(), test).then(function(response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    };

    return {
      sendTest: sendTest,
      preview: preview,
      getLevel: getLevel,
    };

  };

  angular.module('testCenter').service('testService', [
    '$q',
    '$http',
    'urlSettingsFactory',
    testService
  ]);

})();
