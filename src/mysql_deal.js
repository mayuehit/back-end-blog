"use strict";
import mysql from "mysql";
import sql_util from "./sql_util.js";

function getConnection() {
  return mysql.createConnection({
    host: "110.41.22.158",
    user: "root",
    password: "Changeme_123",
    port: "3306",
    database: "blog",
  });
}
export default {
  insert: function (title, author, content) {
    var connection = getConnection();
    connection.connect();
    var addSql =
      "INSERT INTO blog_tb1(blog_title,blog_author,blog_content,submission_date) VALUES(?,?,?,?)";
    var addSqlParams = [title, author, content, sql_util.getCurDates()];
    connection.query(addSql, addSqlParams, function (err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      console.log(
        "--------------------------INSERT----------------------------"
      );
      console.log("INSERT ID:", result);
      console.log(
        "-----------------------------------------------------------------\n\n"
      );
    });
    connection.end();
  },
  update: function (blog_id, blog_title, blog_content) {
    var connection = getConnection();
    connection.connect();
    var modSql =
      "UPDATE blog_tb1 SET blog_title = ?,blog_content = ? WHERE blog_id = ?";
    var modSqlParams = [blog_title, blog_content, blog_id];
    //改
    connection.query(modSql, modSqlParams, function (err, result) {
      if (err) {
        console.log("[UPDATE ERROR] - ", err.message);
        return;
      }
      console.log(
        "--------------------------UPDATE----------------------------"
      );
      console.log("UPDATE affectedRows", result.affectedRows);
      console.log(
        "-----------------------------------------------------------------\n\n"
      );
    });
    connection.end();
  },
  queryRecentSome: function (num) {
    var connection = getConnection();
    connection.connect();
    // exist rist for sql inject
    var query_sql = `SELECT * FROM blog_tb1 LIMIT 0,${num}`;
    connection.query(query_sql, function (err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }

      console.log(
        "--------------------------SELECT----------------------------"
      );
      console.log(result);
      console.log(
        "------------------------------------------------------------\n\n"
      );
    });
    connection.end();
  },
  delete:function(blog_id){
    var connection = getConnection();
    connection.connect();
    // exist rist for sql inject
    var delSql = `DELETE FROM blog_tb1 where blog_id=${blog_id}`;
    connection.query(delSql, function (err, result) {
      if (err) {
        console.log("[DELETE ERROR] - ", err.message);
        return;
      }
      console.log("--------------------------DELETE----------------------------");
      console.log("DELETE affectedRows", result.affectedRows);
      console.log(
        "-----------------------------------------------------------------\n\n"
      );
    });
    // if 100% could go here
    connection.end();
  }
};


