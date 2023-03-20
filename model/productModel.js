const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  color: [{ type: String }],
  size: [{ type: String }],
  category: String,
  price: { type: Number },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", productSchema);
