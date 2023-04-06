const Rout = require("express").Router();
const { getproductDetails_Logic } = require("./logic");

Rout.get("/getProductDetails", getproductDetails_Logic);

module.exports = Rout;
