const { creatCart } = require("./query");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/productImages");
  },
  filename: (req, file, cb) => {
    let uniqueFileName =
      file.originalname + Date.now() + path.extname(file.originalname);
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, uniqueFileName);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

const upload = multer({ storage: storage });

module.exports = {
  creatCartLogic: (req, res) => {
    upload.single("myfile")(req, res, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
        return;
      }
      console.log(req.file);

      const body = req.body;
      const imagePath = req.file.path; // get the file path
      body.imageLink = imagePath; // add the file path to the request body

      // body.imageLink = commpresImagePath;

      creatCart(body, (error, result) => {
        if (error) {
          res.status(404).json({ sms: "card not added" });
          return;
        }

        res.status(303).json({ sms: "card is added succesfully" });
      });
    });
  },
};
