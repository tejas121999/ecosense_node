const express = require("express");
const router = express.Router();
const { getShop, addShop } = require("../controllers/shop.controller.js");

router.get("/get", getShop);
router.post("/post", addShop);

module.exports = router;
