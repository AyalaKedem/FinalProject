import { Router } from "express";
import { addProduct, allProducts } from "../controllers/productC.js";
const router = Router();
router.post("/addProduct", addProduct);
router.get("/allProducts", allProducts);
export { router as productRouter };
