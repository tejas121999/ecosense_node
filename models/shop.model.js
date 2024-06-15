const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema(
  {
    shop_name: {
      type: String,
      required: [true, "Please enter Shop name"],
    },

    contact: {
      type: Number,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    gst_no: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model("Shop", ShopSchema);

module.exports = Shop;
