import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/ecommerce`);
    console.log("database connection succcess...");
  } catch (error) {
    console.log(`error in db.js file , conn method ${error}`);
  }
};

export default conn;
