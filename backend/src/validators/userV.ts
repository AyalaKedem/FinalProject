import Joi from "joi";
import { passwordRegex } from "./regex.js";

const signUpJoiSchema = Joi.object({
  userName: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(passwordRegex).required(),
});

const signInJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().regex(passwordRegex).required(),
});

export { signUpJoiSchema, signInJoiSchema };
