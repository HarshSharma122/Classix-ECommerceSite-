import mongoose from "mongoose";

const productModel = mongoose.model(
  "product",
  new mongoose.Schema({}, { strict: false }),
  "products"
);
export const productData = async (req, res) => {
  try {
    const data = await productModel.find();
    if (!data) {
      res.status(501).send("No data found");
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error, related to server");
  }
};
