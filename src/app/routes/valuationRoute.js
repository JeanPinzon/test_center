(function () {
  'use strict';

  module.exports = function (app) {

    var testController = app.test.testController;

    app.route('/avaliacao')
       .post(testController.saveTest);
  };
})();
