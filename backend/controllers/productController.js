import mongoose from "mongoose"

const productModel = mongoose.model("Products", new mongoose.Schema({}, {strict:false}), "products");

export const productData = async (req, res)=>
{
    const data = await productModel.find();
    if(!data)
    {
        res.status(501).send("No data found");
    }
    res.send(data);
}