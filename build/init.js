"use strict";

require("regenerator-runtime");
require("dotenv/config");
require("./db");
require("./models/User");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 4000;
var handleListening = function handleListening() {
  return console.log("\u2705 Server listenting on http://localhost:".concat(PORT, " \uD83D\uDE80"));
};
_server["default"].listen(PORT, handleListening);