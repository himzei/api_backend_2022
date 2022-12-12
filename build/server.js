"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));
var _userRouter = _interopRequireDefault(require("./routers/userRouter"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import { auth } from "./middlewares";

var app = (0, _express["default"])();
var corsOptions = {
  origin: ["http://localhost:3000", "https://aladin-renewal.netlify.app"],
  credentials: true
};
app.use((0, _cors["default"])(corsOptions));
app.use((0, _cookieParser["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  return res.send("Home");
});
app.use("/users", _userRouter["default"]);
app.use("/api/v1", _apiRouter["default"]);
var _default = app;
exports["default"] = _default;