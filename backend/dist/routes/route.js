import { Router } from "express";
import { Product } from "../db/models/prodactM.js";
const router = Router();
router.post("/", ({ body }, res) => {
    const product = new Product({
        productName: body.productName,
        description: body.description,
        category: body.category,
        status: body.status,
        price: body.status,
        img: body.img,
        name: body.name,
        city: body.city,
        number: body.number,
    });
    product
        .save()
        .then(() => res.json({ message: "הפריט נוסף בהצלחה" }))
        .catch((e) => res.status(500).json({ message: `Eorror:${e}` }));
});
router.get("/", (req, res) => {
    Product.find()
        .then((data) => {
        res.json(data);
    })
        .catch((e) => {
        res.status(500).json({ message: `Error: ${e}` });
    });
});
export { router as productRouter };
