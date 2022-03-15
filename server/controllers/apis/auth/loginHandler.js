const { compare } = require('bcryptjs');
const { loginSchema, signToken } = require('../../../utils');
const { checkUsernameQuery } = require('../../../database/queries');
const { CustomErr } = require('../../error');

module.exports = async ({ body }, res, next) => {
  const { username, password } = body;

  try {
    await loginSchema.validateAsync(body);
    const checkUserQueryPayload = await checkUsernameQuery(username);
    const userExists = checkUserQueryPayload.rowCount;
    if (!userExists) throw CustomErr(`User named ${username} does not exist`, 400);
    const { password: userHashedPassword, id: userId } = checkUserQueryPayload.rows[0];
    const verifiedUser = await compare(password, userHashedPassword);
    if (!verifiedUser) throw CustomErr('Invalid Password', 400);
    const token = await signToken(userId);
    res
      .status(201)
      .cookie('access_token', token, { maxAge: '2592000000' })
      .json({ message: 'Token added successfully', status: 201 });
  } catch (err) {
    err.details ? next(CustomErr(err.details[0].message, 400)) : next(err);
  }
};
