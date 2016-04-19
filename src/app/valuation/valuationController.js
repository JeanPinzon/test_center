(function () {
  'use strict';

  module.exports = function (app) {

    var controller = {};

    controller.saveValuation = function (req, res) {
      console.log(req.body);
      res.json({ ok: true });
    };

    return controller;
  };
})();
