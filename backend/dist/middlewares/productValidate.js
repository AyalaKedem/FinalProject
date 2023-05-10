import _ from "underscore";
import { productJoiSchema } from "../validators/productV.js";
const productValidate = (req, res, next) => {
    const body = _.pick(req.body, "productName", "description", "category", "status", "price", "img", "name", "city", "number", "isFave");
    const { error } = productJoiSchema.validate(body);
    if (error) {
        return res.status(409).json({
            message: "Validation Failed",
            errors: error.details.map((e) => e.message),
        });
    }
    next();
};
export { productValidate };
