(function () {
  'use strict';

  var testService = function ($q, $http, urlSettingsFactory) {

    var sendTest = function (test) {
      var deferred= $q.defer();
      $http.post(urlSettingsFactory.getUrlToSendTest(), test).then(function(response) {

        if (test.preview) {
          var doc = document.getElementById('preview').contentWindow.document;
          document.getElementById('preview').style.display = "block";

          doc.open();
          doc.write(response.data.html);
          doc.close();
        }

        deferred.resolve;
      });
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
