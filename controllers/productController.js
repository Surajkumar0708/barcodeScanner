import Product from "../models/products.js";

export const getProduct = async (req, res, next) => {
  try {
    const { barcodeNumber } = req.query;
    const productDetails = await Product.findOne({ barcodeNumber });
    res.status(500).send(productDetails);
  } catch (e) {
    res
      .status(500)
      .json({ message: e.message || "Internal Server Error", code: 500 });
  }
};
