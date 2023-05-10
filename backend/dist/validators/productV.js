import Joi from "joi";
const productJoiSchema = Joi.object({
    productName: Joi.string().required(),
    description: Joi.string(),
    category: Joi.string().required(),
    status: Joi.string().required(),
    price: Joi.number().required(),
    img: Joi.string(),
    name: Joi.string().required(),
    city: Joi.string().required(),
    number: Joi.string().required(),
    isFave: Joi.boolean(),
});
export { productJoiSchema };
