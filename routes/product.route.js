const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getHighestProduct,
  getHighestSellingCategory,
} = require("../controllers/product.controller.js");

router.get("/get", getProducts);
// route to get top 10 highest selling products
router.get("/getHighestProduct", getHighestProduct);
// route to get highest selling category
router.get("/getHighestSellingCategory", getHighestSellingCategory);

router.get("/:id", getProduct);
router.post("/post", createProduct);
// update a product
router.put("/:id", updateProduct);
// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
