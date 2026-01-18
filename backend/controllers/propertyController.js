const Property = require("../models/Property");



exports.getProperties = async (req, res) => {
  try {
    const { location, price, minPrice, sort } = req.query;

    let filter = {};

    if (location && location.trim() !== "") {
      filter.location = {
        $regex: location.trim(),
        $options: "i",
      };
    }

    if (price) {
      filter.price = { $lte: Number(price) };
    }

    if (minPrice || price) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (price) filter.price.$lte = Number(price);
    }

    let sortOption = {};
    if (sort === "priceLow") sortOption.price = 1;
    if (sort === "priceHigh") sortOption.price = -1;
    if (sort === "latest") sortOption.createdAt = -1;

    const properties = await Property.find(filter).sort(sortOption);

    res.status(200).json({
      count: properties.length,
      properties,
    });
  } catch (error) {
    console.error("GET PROPERTIES ERROR:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
