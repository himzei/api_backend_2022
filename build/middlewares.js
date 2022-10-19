"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateToken = void 0;
var _jsonwebtoken = require("jsonwebtoken");
var authenticateToken = function authenticateToken(req, res, next) {
  var token = req.headers["auth-token"];
  if (token == null) return res.status(401).send("Access Denied");
  try {
    var verified = _jsonwebtoken.jwt.verify(token, process.env.ACCESS_SECRET);
    req.user = verified;
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
  next();
};
exports.authenticateToken = authenticateToken;