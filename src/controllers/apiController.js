import axios from "axios";

// ItemNewAll : 신간 전체 리스트
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트
// (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// Bestseller : 베스트셀러
// BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능

const TTB_KEY = "ttbhimzei1056003";
const BASE_URL = `http://www.aladin.co.kr/ttb/api/ItemList.aspx`;
const BOOK_DETAIL_URL = `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx`;
const BOOK_SEARCH_URL = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx`;
// 리스트 수
const RESUSTS = 7;

export const blogList = (req, res) => {
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  console.log(GOOGLE_API_KEY);
  const BLOG_ID = "2670211976855533082";
  const END_POINT = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${GOOGLE_API_KEY}`;
  // ("https://www.googleapis.com/blogger/v3/blogs/2670211976855533082/posts?key=AIzaSyASRrLYp25_5PItQW0Bxoo8A_IRAxYoSds");
  axios({
    method: "GET",
    url: END_POINT,
  }).then((response) => res.send(response.data));
};

export const itemNewAll = (req, res) => {
  const QUERY_TYPE = "ItemNewAll";
  const IMG_SIZE = "big";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101&OptResult=ratingInfo`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const itemNewSpecial = (req, res) => {
  const QUERY_TYPE = "ItemNewSpecial";
  const IMG_SIZE = "big";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const bestseller = (req, res) => {
  const QUERY_TYPE = "Bestseller";
  const IMG_SIZE = "big";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const bestsellerLastMonth = (req, res) => {
  // this week 구하기
  const today = new Date();
  const QUERY_TYPE = "Bestseller";
  const IMG_SIZE = "big";
  const YEAR = today.getFullYear();
  const MONTH = today.getMonth();
  const WEEK = "1";

  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Year=${YEAR}&Month=${MONTH}&Week=${WEEK}&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const bestsellerLastYear = (req, res) => {
  // this week 구하기
  const today = new Date();
  const QUERY_TYPE = "Bestseller";
  const IMG_SIZE = "big";
  const YEAR = today.getFullYear() - 1;
  const MONTH = "12";
  const WEEK = "1";

  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Year=${YEAR}&Month=${MONTH}&Week=${WEEK}&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const blogBest = (req, res) => {
  const QUERY_TYPE = "BlogBest";
  const IMG_SIZE = "big";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const bookDetail = (req, res) => {
  const { id: ISBN } = req.params;
  const IMG_SIZE = "big";
  const END_POINT = `${BOOK_DETAIL_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&itemIdType=ISBN&ItemId=${ISBN}&output=JS&Version=20131101&OptResult=ebookList,usedList,reviewList,ratingInfo,bestSellerRank
  `;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const inBound = (req, res) => {
  const QUERY_TYPE = "ItemNewAll";
  const IMG_SIZE = "big";
  const SEARCH_TARGET = "Book";
  const TOTAL_BOOKS = "49";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${TOTAL_BOOKS}&start=1&SearchTarget=${SEARCH_TARGET}&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const outBound = (req, res) => {
  const QUERY_TYPE = "ItemNewAll";
  const IMG_SIZE = "big";
  const SEARCH_TARGET = "Foreign";
  const TOTAL_BOOKS = "49";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${TOTAL_BOOKS}&start=1&SearchTarget=${SEARCH_TARGET}&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const music = (req, res) => {
  const QUERY_TYPE = "ItemNewAll";
  const IMG_SIZE = "big";
  const SEARCH_TARGET = "Music";
  const TOTAL_BOOKS = "49";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${TOTAL_BOOKS}&start=1&SearchTarget=${SEARCH_TARGET}&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const dvd = (req, res) => {
  const QUERY_TYPE = "ItemNewAll";
  const IMG_SIZE = "big";
  const SEARCH_TARGET = "DVD";
  const TOTAL_BOOKS = "49";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${TOTAL_BOOKS}&start=1&SearchTarget=${SEARCH_TARGET}&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const used = (req, res) => {
  const QUERY_TYPE = "ItemNewAll";
  const IMG_SIZE = "big";
  const SEARCH_TARGET = "Used";
  const TOTAL_BOOKS = "49";
  const SUB_TARGET = "Book";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${TOTAL_BOOKS}&SubSearchTarget=${SUB_TARGET}&start=1&SearchTarget=${SEARCH_TARGET}&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const eBook = (req, res) => {
  const QUERY_TYPE = "ItemNewAll";
  const IMG_SIZE = "big";
  const SEARCH_TARGET = "eBook";
  const TOTAL_BOOKS = "49";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&cover=${IMG_SIZE}&QueryType=${QUERY_TYPE}&MaxResults=${TOTAL_BOOKS}&start=1&SearchTarget=${SEARCH_TARGET}&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const search = (req, res) => {
  const { term } = req.query;
  const QUERY = term;
  const QUERY_TYPE = "Title"; // Title, Author, Title+Author, Publisher
  const MAX_RESULT = 49;
  const SEARCH_TARGET = "Book"; // Foreign, Music, DVD, Used, eBook, All
  const IMG_SIZE = "Big";

  const END_POINT = `${BOOK_SEARCH_URL}?ttbkey=${TTB_KEY}&Query=${QUERY}&QueryType=${QUERY_TYPE}&MaxResults=${MAX_RESULT}&start=1&SearchTarget=${SEARCH_TARGET}&output=JS&Version=20131101&Cover=${IMG_SIZE}`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};
