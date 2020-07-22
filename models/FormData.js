const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  productPrice: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FormData", PostSchema);
