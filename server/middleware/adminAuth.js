import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "unauthorized..",
      });
    }

    const verified_token = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(verified_token);
    // console.log(process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD);
    if (
      verified_token.id !=
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message: "unauthorized..",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default adminAuth;
