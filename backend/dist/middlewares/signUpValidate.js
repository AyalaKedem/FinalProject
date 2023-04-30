import _ from "underscore";
import { signUpJoiSchema } from "../validators/userV.js";
const signUpValidate = (req, res, next) => {
    const body = _.pick(req.body, "userName", "email", "password");
    const { error } = signUpJoiSchema.validate(body);
    if (error) {
        return res.status(409).json({
            message: "Validation Failed",
            errors: error.details.map((e) => e.message),
        });
    }
    next();
};
export { signUpValidate };
