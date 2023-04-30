import { model } from "mongoose";
import { productSchema } from "../schemas/produtS.js";
const Product = model("Product", productSchema);
export { Product };
