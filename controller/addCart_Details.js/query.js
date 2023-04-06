const pool = require("../DB_Connections/mySql_Connection");

module.exports = {
  creatCart: (postedData, callback) => {
    pool.query(
      "INSERT INTO cart (imageLink, ProductName, ProductPrice, ProductColor,ProductSize) VALUES (?,?,?,?,?)",
      [
        postedData.imageLink,
        postedData.ProductName,
        postedData.ProductPrice,
        postedData.ProductColor,
        postedData.ProductSize,
      ],
      (error, result, field) => {
        // console.log(error);
        if (error) return callback(error);

        return callback(null, result);
      }
    );
  },
};
