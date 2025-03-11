const express = require("express");
const router = express.Router();
const User = require("../../model/user");

// API lấy thông tin user mẫu
router.get("/user", (req, res) => {
  const user1 = new User(1, "John Doe", "john@example.com", "admin");
  res.json(user1);
});

module.exports = router;
