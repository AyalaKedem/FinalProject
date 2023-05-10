import { Router } from "express";
import { addProduct, allProducts, upload } from "../controllers/productC.js";
import { productValidate } from "../middlewares/productValidate.js";
const router = Router();
router.post("/addProduct", productValidate, upload.none(), addProduct);
router.get("/allProducts", allProducts);
export { router as productRouter };
