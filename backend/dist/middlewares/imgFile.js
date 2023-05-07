import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { Product } from '../db/models/prodactM.js';
// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
// Set up Mongoose for database access
mongoose.connect('mongodb://localhost/myapp');
// Set up Express for handling form submissions
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/products', upload.single('image'), (req, res) => {
    const product = new Product({
        productName: req.body.productName,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status,
        price: req.body.price,
        img: req.file.path,
        name: req.body.name,
        city: req.body.city,
        number: req.body.number,
    });
    product
        .save()
        .then(() => res.json({ message: "הפריט נוסף בהצלחה" }).redirect('/products/' + product.id))
        .catch((e) => res.status(500).json({ message: `Eorror:${e}` }));
});
