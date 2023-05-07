import express from "express";
import { connect } from "./db/connect.js";
import morgan from "morgan";
import { productRouter } from "./routes/productsR.js";
import cors from "cors";
// import fileUpload from 'express-fileupload';
const app = express();
const PORT = 8080;
connect();
app.use(cors({ origin: "http://localhost:3000" }));
// app.use(cors({origin: '*'}));
app.use(express.json());
// app.use(fileUpload())
app.use(morgan("dev"));
app.use("/api/products", productRouter);
app.use("/images", express.static("./uploads"));
app.use((req, res) => {
    res.status(404).json({ message: "(404) - Page not found" });
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
