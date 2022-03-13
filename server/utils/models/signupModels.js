const invalidInput = {
  username: 'Za..her',
  email: 'zaher@gmail.com',
  password: '123456',
};

const successSignup = {
  username: 'Zaher',
  email: 'zaher@gmail.com',
  password: '123456',
};

const takenEmail = {
  username: 'Ahmed',
  email: 'john@gmail.com',
  password: '123456',
};

const takenUsername = {
  username: 'john',
  email: 'john@gmail.com',
  password: '123456',
};

module.exports = {
  successSignup,
  invalidInput,
  takenUsername,
  takenEmail,
};
