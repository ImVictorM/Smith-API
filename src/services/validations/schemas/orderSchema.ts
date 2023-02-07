import Joi from 'joi';

const orderReqPattern = Joi.object({
  productsIds: Joi
    .array()
    .min(1)
    .items(Joi.number())
    .required()
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});

export default orderReqPattern;
