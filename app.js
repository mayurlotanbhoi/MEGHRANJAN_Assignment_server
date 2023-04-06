const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// app.use(express.static("public"));

app.use("/public", express.static("public"));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// omport all Rout here
const creatCart = require("./controller/addCart_Details.js/Rout");
const getProductDetails = require("./controller/getCart_Details/Rout");

app.use("/user", creatCart);
app.use("/user", getProductDetails);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
