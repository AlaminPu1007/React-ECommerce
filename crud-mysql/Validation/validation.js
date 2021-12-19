const Joi = require("joi");
/* Validate register user */
function validateRegisterUser(register) {
  const schema = {
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).required().email(), //for valid email
    password: Joi.string().min(3).max(255).required(),
  };

  return Joi.validate(register, schema);
}
/* Validate register user */

/* Validate login user */
function validateLoginUser(login) {
  const schema = {
    email: Joi.string().min(3).max(255).required().email(), //for valid email
    password: Joi.string().min(3).max(255).required(),
  };

  return Joi.validate(login, schema);
}
/* Validate login user */

exports.validateRegister = validateRegisterUser;
exports.validateLogin = validateLoginUser;
