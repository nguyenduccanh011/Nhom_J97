var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Example = require("../entity/example");
var ExampleService = require("./../services/exampleService");
var Product = require("../entity/product");
var ProductService = require("./../services/productService");

router.get("/example-list", async function (req, res) {
  var exampleService = new ExampleService();
  var productList = await exampleService.getProductList();
  res.json(productList);
});
router.get("/get-example", async function (req, res) {
  var exampleService = new ExampleService();
  var product = await exampleService.getProduct(req.query.id);
  res.json(product);
});
router.post("/insert-example", async function (req, res) {
  // console.log(req.body);
  var exampleService = new ExampleService();
  var product = new Example();
  product.Name = req.body.Name;
  product.Price = req.body.Price;
  var result = await exampleService.insertProduct(product);
  res.json({ status: true, message: result });
});
router.post("/update-example", async function (req, res) {
  var exampleService = new ExampleService();
  var product = new Example();
  product._id = new ObjectId(req.body._id);
  product.Name = req.body.Name;
  product.Price = req.body.Price;
  var result = await exampleService.updateProduct(product);
  res.json({ status: true, message: result });
});
router.delete("/delete-example", async function (req, res) {
  var exampleService = new ExampleService();
  var result = await exampleService.deleteProduct(req.query.id);
  res.json({ status: true, message: result });
});

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
  product.link_img = req.body.link_img;
  product.Description = req.body.Description;
  product.Weight = req.body.Weight;
  var result = await productService.insertProduct(product);
  res.json({ status: true, message: result });
});
router.post("/update-product", async function (req, res) {
  var productService = new ProductService();
  var product = new Product();
  product._id = new ObjectId(req.body._id);
  product.Name = req.body.Name;
  product.Price = req.body.Price;
  product.link_img = req.body.link_img;
  product.Description = req.body.Description;
  product.Weight = req.body.Weight;
  var result = await productService.updateProduct(product);
  res.json({ status: true, message: result });
});
router.delete("/delete-product", async function (req, res) {
  var productService = new ProductService();
  var result = await productService.deleteProduct(req.query.id);
  res.json({ status: true, message: result });
});
module.exports = router;
