"use strict";
var common_vendor = require("../common/vendor.js");
const baseURL = "http://localhost:9000/";
const header = {};
const api = {};
api.post = (url, data, successCallback, failCallback) => {
  common_vendor.index.request({
    url: baseURL + url,
    data,
    method: "POST",
    header,
    success: successCallback,
    fail: failCallback
  });
};
api.get = (url, data, successCallback, failCallback) => {
  common_vendor.index.request({
    url: baseURL + url,
    data,
    method: "GET",
    header,
    success: successCallback,
    fail: failCallback
  });
};
exports.api = api;
