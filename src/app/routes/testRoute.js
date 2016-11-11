(function () {
  'use strict';

  module.exports = function (app) {

    var testController = app.test.testController;

    app.route('/api/v1/avaliacao')
      .post(testController.send);
    app.route('/api/v1/preview')
      .post(testController.preview);
    app.route('/api/v1/level')
       .post(testController.getLevel);
  };
})();
