import express from "express";
import cors from "cors";
import "dotenv/config";
import conn from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";

// app config
const app = express();
const PORT = process.env.PORT || 8001;
conn();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// server listening

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
