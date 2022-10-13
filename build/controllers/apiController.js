"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemNewSpecial = exports.itemNewAll = exports.itemEditorChoice = exports.blogBest = exports.bestseller = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _express = require("express");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// ItemNewAll : 신간 전체 리스트
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트
// (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// Bestseller : 베스트셀러
// BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능

var TTB_KEY = "ttbhimzei1056003";
var BASE_URL = "http://www.aladin.co.kr/ttb/api/ItemList.aspx";
// 리스트 수
var RESUSTS = 10;
var itemNewAll = function itemNewAll(req, res) {
  var QUERY_TYPE = "ItemNewAll";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.itemNewAll = itemNewAll;
var itemNewSpecial = function itemNewSpecial(req, res) {
  var QUERY_TYPE = "ItemNewSpecial";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.itemNewSpecial = itemNewSpecial;
var itemEditorChoice = function itemEditorChoice(req, res) {
  var QUERY_TYPE = "ItemEditorChoice";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.itemEditorChoice = itemEditorChoice;
var bestseller = function bestseller(req, res) {
  var QUERY_TYPE = "Bestseller";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.bestseller = bestseller;
var blogBest = function blogBest(req, res) {
  var QUERY_TYPE = "BlogBest";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.blogBest = blogBest;