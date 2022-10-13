"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _apiController = require("../controllers/apiController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var apiRouter = _express["default"].Router();
apiRouter.get("/itemNewAll", _apiController.itemNewAll);
apiRouter.get("/itemNewSpecial", _apiController.itemNewSpecial);
apiRouter.get("/itemEditorChoice", _apiController.itemEditorChoice);
apiRouter.get("/bestseller", _apiController.bestseller);
apiRouter.get("/blogBest", _apiController.blogBest);
var _default = apiRouter;
exports["default"] = _default;