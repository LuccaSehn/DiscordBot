'use strict';

var utils = require('../utils/writer.js');
var Script = require('../service/ScriptService');

module.exports.createPOST = function createPOST (req, res, next, body) {
  Script.createPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listPOST = function listPOST (req, res, next, body) {
  Script.listPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePOST = function updatePOST (req, res, next, body) {
  Script.updatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
