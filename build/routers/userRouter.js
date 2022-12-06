"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController");
var _me = require("../me");
var _middlewares = require("../middlewares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = _express["default"].Router();
userRouter.get("/me", _me.me);
userRouter.get("/post", _middlewares.authenticateToken, function (req, res) {
  res.json(posts.filter(function (post) {
    return post.username == req.user.name;
  }));
});
userRouter.post("/login", _userController.postLogin);
userRouter.post("/signup", _userController.postJoin);

// userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", _userController.finishGithubLogin);
var _default = userRouter;
exports["default"] = _default;