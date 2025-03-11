var express = require("express");
var router = express.Router();
var ProductService = require("./../services/productService");
var productService = new ProductService();

// router.use("/product", require(__dirname + "/productcontroller"));
router.get("/", async function (req, res) {
  try {
    var productList = await productService.getProductList();
    for (var i = 0; i < productList.length; i++) {
      productList[i].Price = productList[i].Price.$numberInt;
      productList[i].Weight = productList[i].Weight.$numberInt;
    }
    res.render("homeapi.ejs", { products: productList });
  } catch (e) {
    console.error(err);
    res.status(500).send("Lỗi máy chủ");
  }
});
router.use("/api", require(__dirname + "/apicontroller"));
// router.get("/admin", function (req, res) {
//   res.render("admin.ejs");
// });
router.use("/admin", require(__dirname + "/admin/admincontroller"));
module.exports = router;