import express from "express";
import cors from "cors";
import "dotenv/config";

// app config
const app = express();
const PORT = process.env.PORT || 8001;

// middlewares
app.use(express.json());
app.use(cors());

// api routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

// server listening

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
