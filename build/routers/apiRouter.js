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
apiRouter.get("/bestseller", _apiController.bestseller);
apiRouter.get("/bestsellerlastmonth", _apiController.bestsellerLastMonth);
apiRouter.get("/bestsellerlastyear", _apiController.bestsellerLastYear);
apiRouter.get("/blogBest", _apiController.blogBest);
apiRouter.get("/book/:id", _apiController.bookDetail);
apiRouter.get("/inbound", _apiController.inBound);
apiRouter.get("/outbound", _apiController.outBound);
apiRouter.get("/music", _apiController.music);
apiRouter.get("/dvd", _apiController.dvd);
apiRouter.get("/used", _apiController.used);
apiRouter.get("/eBook", _apiController.eBook);
apiRouter.get("/search", _apiController.search);
apiRouter.get("/test", function (req, res) {
  return res.send("hello");
});
var _default = apiRouter;
exports["default"] = _default;