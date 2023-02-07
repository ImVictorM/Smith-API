import Joi from 'joi';

const orderReqPattern = Joi.object({
  productsIds: Joi.array().items(Joi.number()).required(),
});

export default orderReqPattern;
