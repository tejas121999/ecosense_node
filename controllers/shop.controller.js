const Shop = require("../models/shop.model");

const getShop = async (req, res) => {
  try {
    const shop = await Shop.find({});
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addShop = async (req, res) => {
  try {
    const shop = await Shop.create(req.body);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getShop,
  addShop,
};
