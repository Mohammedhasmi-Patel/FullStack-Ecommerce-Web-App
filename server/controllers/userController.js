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
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    // check user exist or not
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Doesnt Exist With this email...",
      });
    }

    // match the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "invalid credentials..",
      });
    }

    // generate the token
    const token = createToken(user._id);

    return res.status(200).json({
      success: true,
      message: "user loggedin successfully..",
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

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
      email: email.toLowerCase(),
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

    // suggest for strong password
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 1,
      })
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long and include a number, an uppercase letter, and a special character.",
      });
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating the user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
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
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = createToken(email + password, process.env.JWT_SECRET);

      return res.status(200).json({
        success: true,
        message: "Admin Logged in successfully...",
        token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "invalid credentials...",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
