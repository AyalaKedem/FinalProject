import { Product } from "../db/models/prodactM.js";

const addProduct = ({ body, file }, res) => {
  const { productName, description, category, status, price, name, city, number, isFave } = body;
  // const img = file.filename;
  const product = new Product({
    productName,
    description,
    category,
    status,
    price,
    // img,
    name,
    city,
    number,
    isFave,
  });
  product
    .save()
    // .then(() => res.redirect("/addProduct" + product.id))
    .then(() => res.status(200).json({ message: "הפריט נוסף בהצלחה" }))
    .catch((e) => res.status(500).json({ message: `Eorror:${e}` }));
};

const allProducts = (req, res) => {
  Product.find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      // console.error(e);
      res.status(500).json({ message: `Error: ${e}` });
    });
};

export { addProduct, allProducts };
