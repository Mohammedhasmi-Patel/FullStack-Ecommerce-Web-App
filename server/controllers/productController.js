import { v2 as cloudinary } from "cloudinary";
import Product from "../models/productModel.js";

// add product logic
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      subCategory,
      sizes,
      bestseller,
      date,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUri = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      image: imagesUri,
      date: Date.now(),
    };

    const productInfo = await Product.create(productData);

    return res.status(200).json({
      success: true,
      message: "product added successfully...",
      productInfo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// list prodcuts
const listProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "products not found..",
      });
    }

    return res.status(200).json({
      success: true,
      message: "product data found successfully...",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// remove product
const removeProduct = async (req, res) => {
  try {
    console.log(req);
    const productId = req.body.id;
    console.log(productId);
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "there is an error to delete the data",
      });
    }

    return res.status(200).json({
      success: true,
      message: "product deleted successfully....",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// info for single product
const singleProduct = async (req, res) => {
  try {
    const productId = req.body.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found..",
      });
    }

    return res.status(200).json({
      success: true,
      message: "product found successfully....",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
