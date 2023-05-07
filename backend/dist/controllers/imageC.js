import fs from "fs";
import multer from "multer";
import path from "path";
const uploadDir = "/uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({
    storage,
    //   fileFilter: (req, file, cb) => {
    //     const fileType = /jpeg|jpg|png|gif/;
    //     const mimeType = fileType.test(file.mimetype);
    //     const extname = fileType.test(path.extname(file.originalname));
    //     if (mimeType && extname) {
    //       return cb(null, true);
    //     }
    //     // cb('סוג קובץ לא תקין')
    //   },
    // }).array("imagg", 5);
});
export { upload };
