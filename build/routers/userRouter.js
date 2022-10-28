"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _RefreshToken = require("../controllers/RefreshToken");
var _userController = require("../controllers/userController");
var _middlewares = require("../middlewares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = _express["default"].Router();
var test = function test(req, res) {
  res.cookie("auth", Date.now(), {
    httpOnly: true,
    maxAge: 1000 * 5
  });
  res.json({
    auth: req.cookies.auth
  });
};
userRouter.get("", _userController.getUsers);
userRouter.get("/test", test);
userRouter.get("/token", _RefreshToken.refreshToken);
userRouter.get("/post", _middlewares.authenticateToken, function (req, res) {
  res.json(posts.filter(function (post) {
    return post.username == req.user.name;
  }));
});
userRouter.post("/signup", _userController.postJoin);
userRouter.post("/login", _userController.postLogin);

// userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", _userController.finishGithubLogin);
var _default = userRouter;
exports["default"] = _default;