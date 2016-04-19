(function () {
  'use strict';

  module.exports = function (app) {

    var valuationController = app.teste.valuationController;

    app.route('/avaliacao')
       .post(valuationController.saveValuation);
  };
})();
