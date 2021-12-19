const connection = require("../../config/database");

module.exports = {
  // get all data from user tables
  getUsers: (callBack) => {
    connection.query(`SELECT * FROM users`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  // Insert Data into user tables
  insertUser: (data, callBack) => {
    //query to insert data into users table
    connection.query(
      `insert into users(name, email, password) 
  values(?,?,?)`,
      [data.name, data.email, data.password],
      // callback function goes here
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  // This method is using for to check login user information
  getUserByUserEmail: (email, callBack) => {
    connection.query(
      `select * from users where email = ?`,
      [email],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  // inset product for login user
  insertProductsByUserId: (data, callback) => {
    connection.query(
      `insert into products(product_id, user_id) 
      values(?,?)`,
      [data.product_id, data.user_id],
      (error, results) => {
        if (error) callback(error);
        return callback(null, results);
      }
    );
  },
  // get all product for login usre
  getAllProducts: (id, callback) => {
    connection.query(
      `select * from products where user_id = ?`,
      [id],
      (error, results) => {
        if (error) callback(error);
        return callback(null, results);
      }
    );
  },
  // Delete products 
  deleteProduct:(product_id, callback)=>{
    connection.query(
      `DELETE FROM products WHERE product_id = ?`,
      [product_id],
      (error, results)=>{
        if(error) callback(error);
        return callback(null, results);
      }
    );
  },
};
