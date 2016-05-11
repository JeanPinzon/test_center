(function () {
  'use strict';

  module.exports = function (app) {

    var testController = app.test.testController;

    app.route('api/v1/avaliacao')
       .post(testController.saveTest);
  };
})();
