var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Product = require("./../entity/product");
var ProductService = require("./../services/productService");

// router.use("/", function (req, res) {
//   res.render("product.ejs");
// });
router.get("/product-list", async function (req, res) {
  var productService = new ProductService();
  var productList = await productService.getProductList();
  res.json(productList);
});
router.get("/get-product", async function (req, res) {
  var productService = new ProductService();
  var product = await productService.getProduct(req.query.id);
  res.json(product);
});
router.post("/insert-product", async function (req, res) {
  // console.log(req.body);
  var productService = new ProductService();
  var product = new Product();
  product.Name = req.body.Name;
  product.Price = req.body.Price;
  var result = await productService.insertProduct(product);
  res.json({ status: true, message: result });
});
router.post("/update-product", async function (req, res) {
  var productService = new ProductService();
  var product = new Product();
  product._id = new ObjectId(req.body._id);
  product.Name = req.body.Name;
  product.Price = req.body.Price;
  var result = await productService.updateProduct(product);
  res.json({ status: true, message: result });
});
router.delete("/delete-product", async function (req, res) {
  var productService = new ProductService();
  var result = await productService.deleteProduct(req.query.id);
  res.json({ status: true, message: result });
});
module.exports = router;
