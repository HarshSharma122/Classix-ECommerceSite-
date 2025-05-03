import { Router } from "express";
import { productData } from "../controllers/productController.js";
const productRoutes = Router();
productRoutes.get("/product", productData);

export default productRoutes;