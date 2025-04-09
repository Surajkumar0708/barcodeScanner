import express from "express";
import Product from "../models/products.js";
import { getProduct } from "../controllers/productController.js";

const router = express.Router();

// Router
// router.get("/getProduct", async (req, res, next) => {
//   try {
//     const { barcodeNumber } = req.query;
//     const productDetails = await Product.findOne({ barcodeNumber });
//     res.status(200).send(productDetails);
//   } catch (e) {
//     res.status(500).json({ message: e.message || "Internal Server Error" });
//   }
// });
router.get("/getProduct", getProduct);

export default router;
