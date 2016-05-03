(function () {
  'use strict';

  module.exports = function (app) {

    var controller = {};

    controller.saveTest = function (req, res) {
      console.log(req.body);
      res.json({ ok: true });
    };

    return controller;
  };
})();
