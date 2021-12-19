const router = require("express").Router();
const {
  getUsers,
  insertUsers,
  login,
  createProduct,
  getAllProduct,
  DeleteProduct,
} = require("./user.controller");
//This middlew ware function check every request to user is authorized or not
const { checkToken } = require("../../middleware/auth/token_validation");

router.get("/", checkToken, getUsers);
router.post("/register", insertUsers);
router.post("/signin", login);
router.post("/create-products", checkToken, createProduct);
router.get("/show-products", checkToken, getAllProduct);
router.delete("/delete-products/:id", checkToken, DeleteProduct);
module.exports = router;
