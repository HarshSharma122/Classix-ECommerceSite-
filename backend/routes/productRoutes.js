import { Router } from "express";
import { productData } from "../controllers/productController";
const productRoutes = Router();
productRoutes.get("/product", productData);

export default productRoutes;