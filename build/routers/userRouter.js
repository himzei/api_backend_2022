"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = _express["default"].Router();
var handleUser = function handleUser(req, res) {
  return res.send("dkjasldfjda;sf");
};
userRouter.get("/", handleUser);
var _default = userRouter;
exports["default"] = _default;