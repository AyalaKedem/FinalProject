import Joi from "joi";
const productJoiSchema = Joi.object({
    productName: Joi.string().min(2).required(),
    description: Joi.string().min(3).required(),
    category: Joi.string().required(),
    status: Joi.string().required(),
    price: Joi.number().required(),
    img: Joi.string().required(),
    name: Joi.string().min(2).required(),
    city: Joi.string().min(2).required(),
    number: Joi.string().min(9).required(),
    isFave: Joi.boolean(),
});
export { productJoiSchema };
