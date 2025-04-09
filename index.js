import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.js";

// Dot Env
dotenv.config();

connectDB();

const app = express();

//MIddlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", productRouter);
// app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("======= server is running");
});
