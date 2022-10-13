"use strict";

var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 4000;
var app = (0, _express["default"])();

// app.set("view engine", "json");
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
var handleHome = function handleHome(req, res) {
  return res.send("home");
};
app.get("/", handleHome);
app.use("/api/v1", _apiRouter["default"]);
var handleListening = function handleListening() {
  return console.log("Server listening on port http://localhost:".concat(PORT));
};
app.listen(PORT, handleListening);