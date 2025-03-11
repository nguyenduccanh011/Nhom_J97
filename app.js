var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");

var app = express();

// ✅ Middleware must come BEFORE controllers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Now load controllers AFTER middleware
const controller = require(path.join(__dirname, "apps", "controllers"));
app.use(controller);

// ✅ Static files and view engine
app.set("views", path.join(__dirname, "apps", "views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/admin/static", express.static(path.join(__dirname, "public")));
app.use("/partical", express.static(__dirname + "/views/partical"));

// ✅ Start the server
const server = app.listen(3000, function () {
  console.log("server is running");
});
//123
