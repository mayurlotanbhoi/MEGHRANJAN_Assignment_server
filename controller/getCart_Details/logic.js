const { getproductDetails } = require("./query");

module.exports = {
  getproductDetails_Logic: (req, res) => {
    const body = req.body;

    getproductDetails(body, (error, result) => {
      if (error) {
        res.status(401).json({ sms: "somthing is wrong" });
        return;
      }
      res.status(200).json(result);
    });
  },
};
