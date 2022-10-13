import axios from "axios";
import { response } from "express";

// ItemNewAll : 신간 전체 리스트
// ItemNewSpecial : 주목할 만한 신간 리스트
// ItemEditorChoice : 편집자 추천 리스트
// (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
// Bestseller : 베스트셀러
// BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능

const TTB_KEY = "ttbhimzei1056003";
const BASE_URL = `http://www.aladin.co.kr/ttb/api/ItemList.aspx`;
// 리스트 수
const RESUSTS = 10;

export const itemNewAll = (req, res) => {
  const QUERY_TYPE = "ItemNewAll";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const itemNewSpecial = (req, res) => {
  const QUERY_TYPE = "ItemNewSpecial";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const itemEditorChoice = (req, res) => {
  const QUERY_TYPE = "ItemEditorChoice";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const bestseller = (req, res) => {
  const QUERY_TYPE = "Bestseller";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};

export const blogBest = (req, res) => {
  const QUERY_TYPE = "BlogBest";
  const END_POINT = `${BASE_URL}?ttbkey=${TTB_KEY}&QueryType=${QUERY_TYPE}&MaxResults=${RESUSTS}&start=1&SearchTarget=Book&output=JS&Version=20131101`;
  axios({
    method: "get",
    url: END_POINT,
  }).then((response) => res.send(response.data.item));
};
