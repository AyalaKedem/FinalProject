import { RequestHandler } from "express";
import _ from "underscore";
import { signInJoiSchema } from "../validators/userV.js";

const signInValidate: RequestHandler = (req, res, next) => {
  const body = _.pick(req.body, "email", "password");
  const { error } = signInJoiSchema.validate(body);

  if (error) {
    return res.status(409).json({
      message: "Validate Failed",
      errors: error.details.map((e) => e.message),
    });
  }

  next();
};

export { signInValidate };
