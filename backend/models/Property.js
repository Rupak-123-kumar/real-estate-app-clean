const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  image: String,
  description: String
});

module.exports = mongoose.model("Property", propertySchema);
