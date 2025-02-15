import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// function for creating the token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// logic for login the user
const loginUser = async (req, res) => {};

// logic for registering a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }

    // check the user already exist or not

    const isUserExist = await User.findOne({
      email,
    });

    if (isUserExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    // validating the email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // password length is more than 8
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password should be atleast 8 characters",
      });
    }

    // hashing the password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // generate token

    const token = createToken(user._id);

    if (user) {
      res
        .status(201)
        .json({ success: true, message: "User created successfully", token });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// logic for loggin the admin
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
