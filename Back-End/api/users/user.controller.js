const {
  getUsers,
  insertUser,
  getUserByUserEmail,
  insertProductsByUserId,
  getAllProducts,
  deleteProduct,
} = require("./user.service");
const {
  validateRegister,
  validateLogin,
} = require("../../Validation/validation");
const { sign } = require("jsonwebtoken");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const connection = require("../../config/database");

module.exports = {
  getUsers: (req, res) => {
    //this method form user.service
    getUsers((err, results) => {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  insertUsers: (req, res) => {
    let { body } = req;
    //validation process
    const { error } = validateRegister(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //query to check if register is already exists or not
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [body.email],
      async (err, result) => {
        if (err) {
          return res
            .status(400)
            .send("problem to show data form user table!" + err);
        }

        if (result[0]) {
          return res.status(500).send("This email is already exists!");
        }
        /* Making a password hash */
        /// its give a salt value include 10
        const salt = genSaltSync(10);

        // store salt with hash
        // now password will store with hashing process
        body.password = await hashSync(body.password, salt);
        /* Making a password hash */

        //this method form user.service
        //data store inside users table
        insertUser(body, async (err, results) => {
          if (err) return res.status(400).send("database error" + err);
          await res.status(200).json({
            success: 1,
            data: results,
          });
        });
      }
    );
  },
  login: async (req, res) => {
    let { body } = req;
    //validation process
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // this method form user.services
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        return res.status(400).send(err);
      }
      if (!results)
        return res.status(400).send("This email and password is not valid!");
      const result = compareSync(body.password, results.password);
      //result = true if password is match after compare from hash
      if (result) {
        //making a user token
        //we do not provide password through token value
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
          // expire it after 1 hours , user need to log in agin
          expiresIn: "1h",
        });
        res.status(200).send({
          success: 1,
          message: "login successfully",
          token: jsontoken,
        });
      } else {
        res.status(400).send("This email and password is not valid!");
      }
    });
  },
  // get login user all products here
  createProduct: async (req, res) => {
    let { body } = req;
    //request.decode --helps to get currect login usr info
    const logingUser = req.decoded.result.id;
    body.user_id = logingUser;
    // check product id is already exists or not
    connection.query(
      "SELECT * FROM products WHERE product_id = ?",
      [body.product_id],
      async (err, result) => {
        if (err) {
          return res
            .status(400)
            .send("problem to show data form user table!" + err);
        }

        if (result[0]) {
          return res.status(500).json("This product is already exists!");
        }
        // this method form user.services
        insertProductsByUserId(body, (error, result) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send("your product has been created successfully");
        });
      }
    );
  },
  getAllProduct: async (req, res) => {
    const logingUser = req.decoded.result.id;
    // this method form user.services
    getAllProducts(logingUser, (error, result) => {
      if (error) return res.status(400).send(error);
      res.status(200).send(result);
    });
  },
  DeleteProduct: async (req, res) => {
    const id = req.params.id;
    connection.query(
      "SELECT * FROM products WHERE product_id = ?",
      [id],
      async (err, result) => {
        if (err) {
          return res
            .status(400)
            .send("problem to show data form user table!" + err);
        }

        if (!result[0]) {
          return res.status(400).json("This product is not exists!");
        }

        // this method form user.services
        deleteProduct(id, (error, result) => {
          if (error) {
            return res.status(400).send(error);
          }
          res.status(200).send("your product has been deleted successfully");
        });
      }
    );
  },
};
