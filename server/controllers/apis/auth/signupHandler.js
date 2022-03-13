const { hash } = require('bcryptjs');
const { CustomErr } = require('../../error');
const { signupSchema, signToken, checkTaken } = require('../../../utils');
const { checkUsernameExistsQuery, checkEmailExistsQuery, createNewUser } = require('../../../database/queries');

module.exports = async ({ body }, res, next) => {
  const { username, email, password } = body;

  try {
    await signupSchema.validateAsync(body);
    const usernameCheckPayload = await checkUsernameExistsQuery(username);
    const usernameExists = +usernameCheckPayload.rows[0].bit;
    const emailCheckPayload = await checkTaken(usernameExists, email, 'The username you entered is taken', checkEmailExistsQuery);
    const emailExists = +emailCheckPayload.rows[0].bit;
    const hashedPassword = await checkTaken(emailExists, password, 'The email you entered is taken', hash);
    const userId = await createNewUser({ username, email, password: hashedPassword });
    const token = await signToken(userId);
    res.status(201).cookie('access_token', token).json({ message: 'User added successfully' });
  } catch (err) {
    err.details ? next(CustomErr(err.details[0].message, 400)) : next(err);
  }
};
