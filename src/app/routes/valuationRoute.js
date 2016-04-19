(function () {
  'use strict';

  module.exports = function (app) {

    var valuationController = app.valuation.valuationController;

    app.route('/avaliacao')
       .post(valuationController.saveValuation);
  };
})();
