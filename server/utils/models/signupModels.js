const invalidUsername = {
  username: 'Za..her',
  email: 'zaher@gmail.com',
  password: '123456',
};

const successSignup = {
  username: 'Zain',
  email: 'zain@gmail.com',
  password: '123456',
};

const takenEmail = {
  username: 'Osama',
  email: 'zaher@gmail.com',
  password: '123456',
};

const takenUsername = {
  username: 'Zaher',
  email: 'zaher@gmail.com',
  password: '123456',
};

const invalidPassword = {
  username: 'Zaher',
  email: 'zaher@gmail.com',
  password: '12345',
};

module.exports = {
  successSignup,
  invalidUsername,
  takenUsername,
  takenEmail,
  invalidPassword,
};
