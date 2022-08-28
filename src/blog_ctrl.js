"use strict";
import mysql_deal from './mysql_deal.js';
export default {
  postBlog: function (blog) {
    var result = mysql_deal.insert(blog);
    return "";
  },
  getHotBlogs: function () {
    var result =  mysql_deal.queryRecentSome(3);
    return result;
  },
  listAllBlog: function () {
    var result = mysql_deal.query();
    return "";
  },
  getBlog: function () {
    var result = mysql_deal.query();
    return "";
  },
};
