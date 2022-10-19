"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _cors = _interopRequireDefault(require("cors"));
var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));
var _userRouter = _interopRequireDefault(require("./routers/userRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// app.set("view engine", "json");
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _expressSession["default"])({
  secret: "hello",
  resave: true,
  saveUninitialized: false,
  store: _connectMongo["default"].create({
    mongoUrl: "mongodb://127.0.0.1:27017/aladin"
  })
}));

// app.use((req, res, next) => {
//   req.sessionStore.all((error, sessions) => {
//     next();
//   });
// });

// app.use(authenticateToken);
app.get("/", function (req, res) {
  return res.send("Home");
});
app.use("/users", _userRouter["default"]);
app.use("/api/v1", _apiRouter["default"]);
var _default = app;
exports["default"] = _default;