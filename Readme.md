# Create a back-end program for blog

## How to use

1. init mysql

```sql
create database blog;
use blog;
CREATE TABLE IF NOT EXISTS `blog_tb1`(
   `blog_id` INT UNSIGNED AUTO_INCREMENT,
   `blog_title` VARCHAR(100) NOT NULL,
   `blog_author` VARCHAR(40) NOT NULL,
   `blog_content` VARCHAR(10000),
   `submission_date` DATE,
   PRIMARY KEY ( `blog_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## Reference

[express框架](https://www.runoob.com/nodejs/nodejs-express-framework.html)
[连接mysql](https://www.runoob.com/nodejs/nodejs-mysql.html)
mysql初始密码在/var/log/mysql/mysqld.log里
mysql -u root -p 登录后修改密码
ALTER USER USER() IDENTIFIED BY 'newpassword';
解决nodejs远程连接mysql报错：

- [SELECT ERROR] -  ER_HOST_NOT_PRIVILEGED: Host '223.74.122.180' is not allowed to connect to this MySQL server

[mysqlserver8.0是新的加密方式]
[mysql默认不支持远程连接](https://blog.csdn.net/qq_24264965/article/details/120617481)

```sql
select host from user where user='root';
update user set host = '%' where user ='root';
flush privileges;
```

- [SELECT ERROR] -  ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

```sql
alter user 'root'@'%' identified with mysql_native_password by 'Changeme_123';
flush privileges;
```

prettier - code formatter 自动格式化代码插件
jslint 检查代码格式化问题插件
Unexpected ES6 feature. (es6)jslint(es6)报错一般是提示使用es6可能不兼容

mysql 插件 easy to connect server at vscode;

## My QA

## What's next
