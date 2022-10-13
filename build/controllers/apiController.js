"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemNewAll = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TTB_KEY = "ttbhimzei1056002";

// ItemNewAll : 신간 전체 리스트
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트
// (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// Bestseller : 베스트셀러
// BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능

var QUERY_TYPE = "ItemNewAll";
var BASE_PATH = "http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=".concat(TTB_KEY, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=10&start=1&SearchTarget=Book&output=JS&Version=20131101");
var itemNewAll = function itemNewAll(req, res) {
  _axios["default"].get(BASE_PATH).then(function (response) {
    return response.data;
  });
};
exports.itemNewAll = itemNewAll;