const express = require("express");
const app = express();
const port = 5000;
const mysql = require("mysql");

//define a default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// connect with my sql database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "crud_db",
});

// my sql connected
connection.connect();

//create a table through query
app.get("/createTable", (res, req) => {
  var createTableSql =
    "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";
  //run query to crate a users table
  connection.query(createTableSql, (err, result) => {
    if (err) console.log(err, "table is not created!");
    console.log("Table created successfully!", result);
    res.send(result);
    //need to connection end after every call
    connection.end();
  });
});

//insert data into users table
app.get("/insetUser", (req, res) => {
  var insertSql =
    "INSERT INTO users (name, email) VALUES ('Md. Al-Amin', 'alamin@gmail.com')";
  connection.query(insertSql, function (err, result) {
    if (err) console.log(err, "some problem to insert data!");
    console.log("inserted data successfully", result);
    res.send(result);
    //need to connection end after every call
    connection.end();
  });
});

//select(show) data from table
app.get("/showData", (req, res) => {
  const showData = "SELECT * FROM users";
  connection.query(showData, (err, result) => {
    if (err) console.log("problem to show data form user table!");
    console.log("data show successfully", result);
    res.send(result);
    //need to connection end after every call
    connection.end();
  });
});

//select specific item form a table
app.get("/specificItem", (req, res) => {
  const specificItem = "select * from users where id=2";
  connection.query(specificItem, (err, result) => {
    if (err) console.log("problem to show data form user table!");
    console.log("data show successfully", result);
    res.send(result);
    //need to connection end after every call
    connection.end();
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
