var express = require("express");
var router = express.Router();
// router.use("/home", require(__dirname + "/homecontroller"));
// router.use("/product", require(__dirname + "/productcontroller"));
router.get("/", function (req, res) {
  res.render("index.ejs");
});
router.use("/api", require(__dirname + "/apicontroller"));

// router.use("/admin", require(__dirname + "/admin/admincontroller"));
module.exports = router;
