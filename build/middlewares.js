"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.authenticateToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var authenticateToken = function authenticateToken(req, res, next) {
  var token = req.headers["auth-token"];
  if (token == null) return res.status(401).send("Access Denied");
  try {
    var verified = _jsonwebtoken["default"].verify(token, process.env.ACCESS_SECRET);
    req.user = verified;
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
  next();
};
exports.authenticateToken = authenticateToken;
var verifyToken = function verifyToken(req, res, next) {
  var authHeader = req.headers["authorization"];
  var token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  _jsonwebtoken["default"].verify(token, process.env.ACCESS_SECRET, function (err, decoded) {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};
exports.verifyToken = verifyToken;