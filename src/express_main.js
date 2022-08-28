"use strict";
import express from "express";
import blog_ctrl from "./blog_ctrl.js";
var app = express();

// post blog
app.post("/ho", function (req, res) {
  // get req
  var blog = JSON.stringify(req.body);
  console.log(blog);
  // deal post
  var result = blog_ctrl.postBlog(blog);
  // reply
  res.send(`post blog result:${result}`);
});

// get hot blogs
app.get("/hotblogs", function (req, res) {
  blog_ctrl.getHotBlogs().then(blogs=>{
    console.log(blogs);
    res.send(blogs);
  }).catch(err=>{
    console.log(err);
  });
});

// get all blog brief info list
app.get("/xxx", function (req, res) {
   var blogList = blog_ctrl.listAllBlog();
   console.log(blogList);
   res.send(blogList);
 });

 // get specifical blog complete info
 app.get("/xxx", function (req, res) {
   var blog = blog_ctrl.getBlog();
   console.log(blog);
   res.send(blog);
 });

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
