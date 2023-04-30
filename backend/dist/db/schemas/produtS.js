import { Schema } from "mongoose";
const productSchema = new Schema({
    productName: String,
    description: String,
    category: String,
    status: String,
    price: Number,
    img: String,
    name: String,
    city: String,
    munber: String,
});
export { productSchema };
