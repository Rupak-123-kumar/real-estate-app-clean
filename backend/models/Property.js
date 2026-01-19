const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: String,
    location: String,
    price: Number,
    image: String,
    description: String,
  },
  {
    timestamps: true, // 👈 latest sort ke liye
  }
);

// 👇 THIRD PARAMETER = EXACT COLLECTION NAME IN ATLAS
module.exports = mongoose.model(
  "Property",
  propertySchema,
  "real_estate_properties"
);
