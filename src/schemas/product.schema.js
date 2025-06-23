import Joi from 'joi';

const productSchema = Joi.object({
    id: Joi.string().uuid().required(),
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().max(500).optional(),
    price: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).required(),
    category: Joi.string().valid('console', 'accessory', 'game').required(),
    imageUrl: Joi.string().uri().optional(),
});

export default productSchema;