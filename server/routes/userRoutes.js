import express from "express";

import {
  adminLogin,
  loginUser,
  registerUser,
} from "../controllers/userController.js";

// creating the user router

const userRouter = express.Router();

// login route
userRouter.post("/login", loginUser);
// register route
userRouter.post("/register", registerUser);
// admin login route
userRouter.post("/admin", adminLogin);

export default userRouter;
