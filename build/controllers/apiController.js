"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.used = exports.search = exports.outBound = exports.music = exports.itemNewSpecial = exports.itemNewAll = exports.inBound = exports.eBook = exports.dvd = exports.bookDetail = exports.blogBest = exports.bestsellerLastYear = exports.bestsellerLastMonth = exports.bestseller = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// ItemNewAll : 신간 전체 리스트
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트
// (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// Bestseller : 베스트셀러
// BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능

var TTB_KEY = "ttbhimzei1056003";
var BASE_URL = "http://www.aladin.co.kr/ttb/api/ItemList.aspx";
var BOOK_DETAIL_URL = "http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx";
var BOOK_SEARCH_URL = "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx";
// 리스트 수
var RESUSTS = 7;
var itemNewAll = function itemNewAll(req, res) {
  var QUERY_TYPE = "ItemNewAll";
  var IMG_SIZE = "big";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101&OptResult=ratingInfo");
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
  var IMG_SIZE = "big";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.itemNewSpecial = itemNewSpecial;
var bestseller = function bestseller(req, res) {
  var QUERY_TYPE = "Bestseller";
  var IMG_SIZE = "big";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.bestseller = bestseller;
var bestsellerLastMonth = function bestsellerLastMonth(req, res) {
  // this week 구하기
  var today = new Date();
  var QUERY_TYPE = "Bestseller";
  var IMG_SIZE = "big";
  var YEAR = today.getFullYear();
  var MONTH = today.getMonth();
  var WEEK = "1";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Year=").concat(YEAR, "&Month=").concat(MONTH, "&Week=").concat(WEEK, "&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.bestsellerLastMonth = bestsellerLastMonth;
var bestsellerLastYear = function bestsellerLastYear(req, res) {
  // this week 구하기
  var today = new Date();
  var QUERY_TYPE = "Bestseller";
  var IMG_SIZE = "big";
  var YEAR = today.getFullYear() - 1;
  var MONTH = "12";
  var WEEK = "1";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Year=").concat(YEAR, "&Month=").concat(MONTH, "&Week=").concat(WEEK, "&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.bestsellerLastYear = bestsellerLastYear;
var blogBest = function blogBest(req, res) {
  var QUERY_TYPE = "BlogBest";
  var IMG_SIZE = "big";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(RESUSTS, "&start=1&SearchTarget=Book&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.blogBest = blogBest;
var bookDetail = function bookDetail(req, res) {
  var ISBN = req.params.id;
  var IMG_SIZE = "big";
  var END_POINT = "".concat(BOOK_DETAIL_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&itemIdType=ISBN&ItemId=").concat(ISBN, "&output=JS&Version=20131101&OptResult=ebookList,usedList,reviewList,ratingInfo,bestSellerRank\n  ");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.bookDetail = bookDetail;
var inBound = function inBound(req, res) {
  var QUERY_TYPE = "ItemNewAll";
  var IMG_SIZE = "big";
  var SEARCH_TARGET = "Book";
  var TOTAL_BOOKS = "49";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(TOTAL_BOOKS, "&start=1&SearchTarget=").concat(SEARCH_TARGET, "&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.inBound = inBound;
var outBound = function outBound(req, res) {
  var QUERY_TYPE = "ItemNewAll";
  var IMG_SIZE = "big";
  var SEARCH_TARGET = "Foreign";
  var TOTAL_BOOKS = "49";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(TOTAL_BOOKS, "&start=1&SearchTarget=").concat(SEARCH_TARGET, "&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.outBound = outBound;
var music = function music(req, res) {
  var QUERY_TYPE = "ItemNewAll";
  var IMG_SIZE = "big";
  var SEARCH_TARGET = "Music";
  var TOTAL_BOOKS = "49";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(TOTAL_BOOKS, "&start=1&SearchTarget=").concat(SEARCH_TARGET, "&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.music = music;
var dvd = function dvd(req, res) {
  var QUERY_TYPE = "ItemNewAll";
  var IMG_SIZE = "big";
  var SEARCH_TARGET = "DVD";
  var TOTAL_BOOKS = "49";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(TOTAL_BOOKS, "&start=1&SearchTarget=").concat(SEARCH_TARGET, "&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.dvd = dvd;
var used = function used(req, res) {
  var QUERY_TYPE = "ItemNewAll";
  var IMG_SIZE = "big";
  var SEARCH_TARGET = "Used";
  var TOTAL_BOOKS = "49";
  var SUB_TARGET = "Book";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(TOTAL_BOOKS, "&SubSearchTarget=").concat(SUB_TARGET, "&start=1&SearchTarget=").concat(SEARCH_TARGET, "&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.used = used;
var eBook = function eBook(req, res) {
  var QUERY_TYPE = "ItemNewAll";
  var IMG_SIZE = "big";
  var SEARCH_TARGET = "eBook";
  var TOTAL_BOOKS = "49";
  var END_POINT = "".concat(BASE_URL, "?ttbkey=").concat(TTB_KEY, "&cover=").concat(IMG_SIZE, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(TOTAL_BOOKS, "&start=1&SearchTarget=").concat(SEARCH_TARGET, "&output=JS&Version=20131101");
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.eBook = eBook;
var search = function search(req, res) {
  var term = req.query.term;
  var QUERY = term;
  var QUERY_TYPE = "Title"; // Title, Author, Title+Author, Publisher
  var MAX_RESULT = 49;
  var SEARCH_TARGET = "Book"; // Foreign, Music, DVD, Used, eBook, All
  var IMG_SIZE = "Big";
  var END_POINT = "".concat(BOOK_SEARCH_URL, "?ttbkey=").concat(TTB_KEY, "&Query=").concat(QUERY, "&QueryType=").concat(QUERY_TYPE, "&MaxResults=").concat(MAX_RESULT, "&start=1&SearchTarget=").concat(SEARCH_TARGET, "&output=JS&Version=20131101&Cover=").concat(IMG_SIZE);
  (0, _axios["default"])({
    method: "get",
    url: END_POINT
  }).then(function (response) {
    return res.send(response.data.item);
  });
};
exports.search = search;