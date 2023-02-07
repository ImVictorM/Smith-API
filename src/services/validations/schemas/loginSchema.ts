import Joi from 'joi';

const loginReqPattern = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default loginReqPattern;
