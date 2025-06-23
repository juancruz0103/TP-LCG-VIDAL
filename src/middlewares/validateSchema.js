import { body, validationResult } from 'express-validator';

const validateSchema = (schema) => {
    return async (req, res, next) => {
        await Promise.all(schema.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    };
};

export default validateSchema;