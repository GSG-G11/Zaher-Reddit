const Joi = require('joi');

module.exports = Joi.object({
  username: Joi.string().$.alphanum().rule({ message: 'Username must contain only letters or numbers' }).required(),
  email: Joi.string().email().required(),
  password: Joi.string().$.min(6).max(33)
    .rule({ message: 'Password length must be between 6 and 33 characters' }).required(),
});
