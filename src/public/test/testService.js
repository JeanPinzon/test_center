(function () {
  'use strict';

  var testService = function ($q, $http, urlSettingsFactory) {

    var sendTest = function (test) {
      var deferred= $q.defer();
      $http.post(urlSettingsFactory.getUrlToSend(), test).then(function(response) {
        deferred.resolve;
      });
      return deferred.promise;
    };

    var preview = function (test) {
      var deferred= $q.defer();
      $http.post(urlSettingsFactory.getUrlToPreview(), test).then(function(response) {

        var doc = document.getElementById('preview').contentWindow.document;
        document.getElementById('preview').style.display = "block";

        doc.open();
        doc.write(response.data.html);
        doc.close();

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
