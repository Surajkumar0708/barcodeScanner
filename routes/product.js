import express from "express";
import { getProduct } from "../controllers/productController.js";
import { login, signUp } from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authentication.js";
import { addOrder, getOrders } from "../controllers/orderController.js";

const router = express.Router();

router.get("/getProduct", getProduct);
router.post("/signup", signUp);
router.post("/login", login);
router.post("/addorder", authenticateToken, addOrder);
router.get("/getorders", authenticateToken, getOrders);

export default router;
