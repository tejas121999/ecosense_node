const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate("shop", "shop_name");
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controller to find highest selling product
const getHighestProduct = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $group: {
          _id: "$name",
          totalSales: { $sum: "$sales" },
        },
      },
      {
        $sort: { totalSales: -1 },
      },
      {
        $limit: 10,
      },
    ]);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

// controller to find highest selling category
const getHighestSellingCategory = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalSales: { $sum: "$sales" },
        },
      },
      {
        $sort: { totalSales: -1 },
      },
      {
        $limit: 10,
      },
    ]);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getHighestProduct,
  getHighestSellingCategory,
};
