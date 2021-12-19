 require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connection = require("./config/database");
const userRouter = require("./api/users/user.router");
//for accepting corsrequest
var cors = require('cors');
app.use(cors());

//define a default route
app.get('/',(req, res)=>{
  res.send("Hello World!");
});

//usr route goes here
app.use("/api/users", userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
